Hassaan Travel eSIM components - corrected version

Replace the files in:
apps/web/components/layout/home/esim/

with the seven source files in this folder, then run from the project root:

  npx turbo run build --filter=web

Corrections in EsimHome.tsx:
- Added the optional API field `description` to ApiPackage. The API route already
  declares and uses this supplier field.
- Safely checked regex capture groups before calling toUpperCase().
- Corrected and retained the decimal data-size regex.
- Safely accessed the first sorted package when calculating startingPrice.
- Treated only positive numeric volume values as usable data sizes.

All seven files were reviewed and formatted. TypeScript reported no errors in
these eSIM files. A project-wide standalone TypeScript check did report existing,
unrelated missing declarations for `nodemailer` in app/actions/sendEmail.ts and
lib/mailer.ts. If that becomes the next Vercel error, install the declarations:

  npm install --save-dev @types/nodemailer

