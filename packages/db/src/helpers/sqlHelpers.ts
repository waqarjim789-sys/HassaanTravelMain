// packages/db/src/helpers/sqlHelpers.ts
type SqlBuildResult = {
  text: string;
  values: unknown[];
};

/**
 * Build dynamic INSERT query
 */
export function buildInsertQuery(
  table: string,
  data: Record<string, unknown>
): SqlBuildResult {
  const keys = Object.keys(data);

  if (keys.length === 0) {
    throw new Error("Insert data cannot be empty");
  }

  const values = Object.values(data);

  const columns = keys.map((key) => `"${key}"`).join(", ");

  const placeholders = keys
    .map((_, index) => `$${index + 1}`)
    .join(", ");

  return {
    text: `
      INSERT INTO "${table}"
      (${columns})
      VALUES (${placeholders})
      RETURNING *
    `,
    values,
  };
}

/**
 * Build dynamic UPDATE query
 */
export function buildUpdateQuery(
  table: string,
  data: Record<string, unknown>,
  where: {
    column: string;
    value: unknown;
  }
): SqlBuildResult {
  const keys = Object.keys(data);

  if (keys.length === 0) {
    throw new Error("Update data cannot be empty");
  }

  const values = Object.values(data);

  const setClause = keys
    .map((key, index) => `"${key}" = $${index + 2}`)
    .join(", ");

  return {
    text: `
      UPDATE "${table}"
      SET ${setClause}
      WHERE "${where.column}" = $1
      RETURNING *
    `,
    values: [where.value, ...values],
  };
}

/**
 * Build dynamic DELETE query
 */
export function buildDeleteQuery(
  table: string,
  where: {
    column: string;
    value: unknown;
  }
): SqlBuildResult {
  return {
    text: `
      DELETE FROM "${table}"
      WHERE "${where.column}" = $1
      RETURNING *
    `,
    values: [where.value],
  };
}

/**
 * Build dynamic SELECT query
 */
export function buildSelectQuery(
  table: string,
  options?: {
    columns?: string[];
    where?: {
      column: string;
      value: unknown;
    };
    orderBy?: string;
    orderDirection?: "ASC" | "DESC";
    limit?: number;
  }
): SqlBuildResult {
  const columns =
    options?.columns?.length
      ? options.columns.map((col) => `"${col}"`).join(", ")
      : "*";

  const values: unknown[] = [];

  let text = `SELECT ${columns} FROM "${table}"`;

  if (options?.where) {
    values.push(options.where.value);

    text += ` WHERE "${options.where.column}" = $1`;
  }

  if (options?.orderBy) {
    text += ` ORDER BY "${options.orderBy}" ${
      options.orderDirection ?? "ASC"
    }`;
  }

  if (options?.limit) {
    text += ` LIMIT ${options.limit}`;
  }

  return {
    text,
    values,
  };
}