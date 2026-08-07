import React from 'react'

interface Section {
  id: number;
  title: string;
  content?: string[];
  subsections?: string[];
  list?: string[];
  image?: string;
  note?: string;
  email?: string;
}

interface TermsData {
  header: {
    heading: string;
  };

  hero: {
    title: {
      line1: string;
      highlight: string;
    };
    description: string;
  };

  sections: Section[];
}

const termsData: TermsData = {
  header: {
    heading: "Algemene voorwaarden",
  },

  hero: {
    title: {
      line1: "Algemene voorwaarden",
      highlight: "",
    },
    description:
      "De volgende algemene voorwaarden zijn van toepassing op overeenkomsten van Hassaan Travel. Vragen omtrent de algemene voorwaarden kunt u gerust stellen. Lees deze algemene voorwaarden zorgvuldig door alvorens u gebruikmaakt van de website. Door het openen en gebruiken van de website geeft u aan dat u (onvoorwaardelijk en onherroepelijk) akkoord gaat met deze algemene voorwaarden. Indien u niet akkoord gaat met deze algemene voorwaarden, verzoeken wij u geen gebruik te maken van onze website en verzoeken wij u dringend om deze onmiddellijk te verlaten.",
  },

  sections: [
    {
      id: 1,
      title: "Definities",
      subsections: [
        "In deze algemene voorwaarden wordt verstaan onder:",
        "AVG: Algemene Verordening Gegevensbescherming.",
        "Boeking: Vliegticket die is bevestigd.",
        "BW: Burgerlijk Wetboek.",
        "Derde: Iedere persoon, instantie, instelling, (vliegtuig)maatschappij niet behorende tot Hassaan Travel.",
        "HT: Hassaan Travel: VOF gevestigd te Dordtselaan 67 D, 3081 BG te Rotterdam onder KVK-nummer 81525818.",
        "IATA: International Air Transport Association.",
        "Klant: Persoon die een vliegticket wil aanschaffen/heeft aangeschaft.",
        "Offerte: Voorstel dat wordt gedaan aan een potentiële klant. Prijzen die worden vermeld zijn altijd onder voorbehoud en kunnen wijzigen wanneer de boeking niet direct wordt bevestigd.",
        "Overeenkomst: Afspraak tussen Hassaan Travel en een klant die overeenkomen tot de koop van een vliegticket.",
        "Reservering: Het reserveren van een vliegticket voor een bepaalde dag of tijdstip, waarvan de prijs nog kan veranderen wanneer deze niet direct wordt bevestigd.",
        "Reisdocument: Document dat wordt gebruikt door de klant om te reizen. Hieronder wordt verstaan een paspoort, identiteitskaart, zakenpaspoort, diplomatiek- of dienstpaspoort, vreemdelingen- of vluchtelingenpaspoort, noodpaspoort of een laissez-passer.",
        "Vergoeding: Administratieve kosten die Hassaan Travel in rekening brengt voor haar verleende diensten.",
      ],
      image: "/assets/terms.webp",
    },
    {
      id: 2,
      title: "Aanbod en overeenkomst",
      subsections: [
        "2.1. HT biedt vrijblijvend vliegtickets aan en kan deze te allen tijde herroepen. De prijzen die worden getoond zijn onder voorbehoud en kunnen wijzigen wanneer deze niet direct worden bevestigd. Een overeenkomst tussen HT en de klant ontstaat wanneer de volledige betaling is voldaan en het vliegticket hiermee is bevestigd.",
        "2.2. De overeenkomst komt tot stand op het moment dat de klant de boeking bevestigd. Bevestiging geschiedt per e mail, per WhatsApp of mondeling.",
        "2.3. Bij het aangaan van de overeenkomst gaat de klant akkoord met de algemene voorwaarden. Dit is eveneens het moment dat de algemene voorwaarden in dienst treden.",
      ],
    },
    {
      id: 3,
      title: "Betaling",
      subsections: [
        "3.1. Betaling vindt plaats voordat het vliegticket is bevestigd. Na betaling wordt het vliegticket bevestigd.",
        "3.2. Indien er geen volledige betaling is verricht, vindt er geen boeking plaats en kan de prijs wijzigen. Tevens heeft er geen boeking plaatsgevonden en kan het zijn dat het voorgestelde vliegticket niet meer beschikbaar is.",
        "3.3. Betaling geschiedt middels een bankoverschrijving met een debit- of creditcard, dan wel contant.",
      ],
    },
    {
      id: 4,
      title: "Prijswijziging",
      subsections: [
        "4.1. De prijs van het vliegticket kan worden gewijzigd wanneer deze niet direct wordt bevestigd. Dit kan gebeuren door onder andere brandstofkosten, heffingen, prijsopslagen, belastingen en wisselkoersen.",
        "4.2. Bij een definitief geboekte ticket staat de prijs vast en kan deze niet meer wijzigen.",
      ],
    },
    {
      id: 5,
      title: "Persoonsgegevens",
      subsections: [
        "5.1. De klant is zelf verantwoordelijk voor het aanleveren van een reisdocument die tenminste zes maanden geldig is en waarop de persoonsgegevens correct zijn. Indien de klant reist met een ongeldig reisdocument, kan HT hiervoor niet aansprakelijk worden gesteld. HT stelt een vliegticket op, op basis van de gegevens die worden vermeld op het reisdocument. Voor zover dit reisdocument fouten bevat kan HT hier niet voor aansprakelijk worden gesteld.",
        "5.2. HT vraagt de klant ook om het reisdocument en ticket controleren op de juistheid van deze. De gegevens op het vliegticket dienen overeen te komen met de persoonsgegevens op het reisdocument. Wijzigen van tickets leidt ertoe dat HT hiervoor een vergoeding in rekening brengt.",
        "5.3. Alle persoonsgegevens van de klant worden door HT verzameld en verwerkt met in achtneming van de HT privacyverklaring.",
      ],
    },
    {
      id: 6,
      title: "Wijzigen van vliegticket door klant",
      subsections: [
        "6.1. Het wijzigen van een vliegticket is mogelijk tot 24 uur voor vertrek. Voor het wijzigen kan HT een vergoeding in rekening brengen. Deze vergoeding is afhankelijk van de wijziging van de klant.",
        "6.2. Indien er een wijziging moet plaatsvinden binnen 24 uur voor vertrek, dan kan HT hiervoor een extra vergoeding in rekening brengen. Deze vergoeding is afhankelijk van de wijziging van de klant.",
      ],
    },
    {
      id: 7,
      title: "Annulering",
      subsections: [
        "7.1. Het annuleren van een vliegticket is mogelijk tot 24 uur voor vertrek. De kosten hiervoor verschillen per vliegtuigmaatschappij. De kosten voor de annulering zijn volledig voor de klant. HT draagt hierover geen enkele verantwoordelijk- en aansprakelijkheid.",
        "7.2. Bij annulering van het vliegticket wordt er een vergoeding in rekening gebracht voor de door HT verleende diensten.",
        "7.3. Indien een vliegtuigmaatschappij geen annuleringsbeleid hanteert en het annuleren van een vliegticket niet mogelijk is, dan vermeldt HT dit aan de klant alvorens de boeking wordt bevestigd.",
        "7.4. Natuurrampen, molest en overmachtssituaties leiden niet tot aansprakelijkheid. In geval van een natuurramp of ernstige veiligheidsproblemen op de bestemming van het vliegticket die gevolgen kunnen hebben voor de reis van de klant, behoudt HT het recht om het vliegticket te annuleren.",
      ],
    },
    {
      id: 8,
      title: "Wijzigingen en/of annuleringen door vliegtuigmaatschappij",
      subsections: [
        "8.1. HT kan niet aansprakelijk worden gesteld voor wijzigingen en annuleringen van vluchten die worden gedaan door derde. Iedere derde behoort niet tot HT toe.",
      ],
    },
    {
      id: 9,
      title: "Beperkte aansprakelijkheid",
      subsections: [
        "9.1. In geen geval kan HT aansprakelijk worden gesteld voor enige directe, speciale, indirecte, incidentele schade of gevolgschade (met inbegrip van onder meer inkomsten- of winstderving), hoge of bijkomende schadevergoeding, schade van welke aard dan ook of onderworpen aan billijke of opgelegde rechtsmiddelen (op grond van contractbreuk, onrechtmatige daad, nalatigheid, strikte aansprakelijkheid of anderszins) die voortvloeien uit:",
        "● De toegang tot of het gebruik van deze website, de onmogelijkheid of vertraging waarmee deze website kan worden gebruikt, of alle informatie op deze website; of,",
        "● De beschikbaarheid en bruikbaarheid van producten en diensten (met uitzondering van door ons uitgevoerd luchttransport).",
      ],
    },
    {
      id: 10,
      title: "IATA",
      subsections: [
        "10.1. HT is aangesloten bij IATA. Dit houdt in dat HT vliegtickets direct boekt bij de vliegtuigmaatschappij en er geen tussenpersoon is.",
      ],
    },
    {
      id: 11,
      title: "Reis",
      subsections: [
        "11.1. HT is niet verantwoordelijk, noch aansprakelijk voor complicaties/problemen die de klant ondervindt tijdens zijn of haar reis. Indien een probleem zich voordoet voordat de klant is ingecheckt of tijdens het inchecken op het vliegveld, dan kan HT samen met de klant een passende oplossing zoeken of het probleem oplossen tot zover HT dit kan.",
        "11.2. Nadat het inchecken van de klant op het vliegveld is voltooid, is HT niet meer verantwoordelijk, noch aansprakelijk voor de boeking van de klant, mits het inchecken wordt geannuleerd.",
        "11.3. Annuleren na inchecken is niet altijd mogelijk. Dit kan enkel wanneer het beleid van de vliegtuigmaatschappij dit toelaat. Dit beleid is afhankelijk van op dat moment geldende tarief voor het vliegticket.",
      ],
    },
    {
      id: 12,
      title: "Reisdocument en visum",
      subsections: [
        "12.1. De klant is zelf verantwoordelijk voor het aanleveren van een reisdocument die tenminste zes maanden geldig is en waarop de persoonsgegevens correct zijn. Daarnaast is de klant zelf verantwoordelijk voor het bezitten van een (indien noodzakelijk) geldig visum, tenzij met HT is overeengekomen dat zij ook de zorg dragen over het visum.",
        "12.2. Indien HT de zorg draagt over het visum, dan brengt HT hiervoor een vergoeding in rekening. De klant is zelf verantwoordelijk voor het onderzoeken van de geldende visumeisen van het land waar de klant naar toe reist.",
      ],
    },
    {
      id: 13,
      title: "Niet nakomen betalingsverplichting door klant",
      subsections: [
        "13.1. Dit artikel is van toepassing op overeenkomsten waarbij HT het vliegticket heeft aangeschaft voor de klant, maar de betaling door de klant nog niet is voldaan.",
        "13.2. Indien door HT wordt geconstateerd dat de klant in gebreke is, dan zal HT de klant hiervan in kennis stellen bij aangetekend schrijven. Art. 6:82 BW is hier van toepassing. De termijn die in acht moet worden genomen voor de ingebrekestelling bedraagt veertien dagen.",
        "13.3. Indien ook na een tweede ingebrekestelling de klant haar betalingsverplichting niet nakomt, dan kan HT de overeenkomst tussen haar en de klant ontbinden. De artikelen 6:265 t/m 279 BW zijn hier van toepassing.",
        "13.4. Indien de overeenkomst wordt ontbonden vanwege het niet nakomen van de betalingsverplichting van de klant zoals wordt bedoeld in artikel 12.3, dan wordt het vliegticket geannuleerd bij de vliegmaatschappij waar deze is gekocht. De annuleringskosten voor het vliegticket worden in rekening gebracht bij de klant. Tevens brengt HT een vergoeding in rekening voor de door haar verleende diensten.",
        "13.5. De klant is te allen tijde gehouden tot vergoeding van de buitengerechtelijke kosten. Deze kosten zijn afhankelijk van de openstaande kosten van de klant.",
      ],
    },
    {
      id: 14,
      title: "Nederlands recht",
      subsections: [
        "14.1. Op overeenkomsten van HT en op deze algemene voorwaarden is het Nederlands recht van toepassing.",
      ],
    },
    {
      id: 15,
      title: "Toepasselijkheid",
      subsections: [
        "15.1. De algemene voorwaarden van HT zijn van toepassing op iedere offerte, reservering, overeenkomst en boeking tussen HT en de klant. Tevens zijn deze van toepassing op alle derde waarmee HT overeenkomsten sluit c.q. vliegtickets besteld voor de klant.",
        "15.2. Van toepassing is recht dat geldig was op dinsdag 1 april 2025.",
        "15.3. HT kan deze algemene voorwaarden op elk gewenst moment zonder voorafgaande kennisgeving wijzigen. Gewijzigde voorwaarden worden van kracht na publicatie op de website en gelden niet met terugwerkende kracht op bestaande contractuele afspraken die via deze website of anderszins tot stand zijn gekomen. Als u deze website na elke wijziging blijft gebruiken, betekent dit dat u de gewijzigde algemene voorwaarden heeft geaccepteerd.",
      ],
    },
    {
      id: 16,
      title: "Persoonsgegevens",
      subsections: [
        "16.1. Voor het maken van een boeking vraagt HT om persoonlijke informatie. De persoonlijke gegevens die HT ontvangt gebruikt zij uitsluitend om de service te verlenen of het betreffende reisproduct te leveren. HT zal persoonsgegevens nooit zonder expliciete toestemming van de klant verstrekken aan personen of bedrijven voor commerciële exploitatie.",
      ],
    },
    {
      id: 17,
      title: "Geschillen",
      subsections: [
        "17.1. Indien er geschillen voorkomen tussen HT en de klant waarbij deze algemene voorwaarden van toepassing zijn, dan zijn beide partijen verplicht dit geschil onderling op te lossen. Indien dit niet mogelijk is, dan is de rechtbank in Rotterdam bevoegd om de zaak te behandelen.",
      ],
    },
    {
      id: 18,
      title: "Nietigheid",
      subsections: [
        "18.1. De algemene voorwaarden zijn met grote zorgvuldigheid samengesteld. Mocht vast komen te staan dat een bepaling in deze algemene voorwaarden ongeldig, dan wel niet afdwingbaar is, dan blijven de overige bepalingen onverminderd van kracht.",
        "18.2. Partijen zullen de ongeldige of niet afdwingbare bepalingen vervangen voor bepalingen die naar haar aard en strekking zoveel mogelijk dezelfde werking hebben als de ongeldige of niet afdwingbare bepalingen.",
      ],
    },
    {
      id: 19,
      title: "Volledige overeenkomst",
      subsections: [
        "19.1. Deze algemene voorwaarden en eventuele andere juridische kennisgevingen, beleidsregels en richtlijnen van HT die verbonden zijn aan deze algemene voorwaarden vormen de volledige overeenkomst tussen u en HT met betrekking tot uw gebruik van deze Website en vervangen alle voorafgaande afspraken of overeenkomsten (dan wel mondeling, dan wel schriftelijk), vorderingen, verklaringen en afspraken van of tussen partijen met betrekking tot dit onderwerp. De voorwaarden kunnen slechts gewijzigd of aangepast worden door deze wijzigingen of aanpassingen beschikbaar te maken op deze website.",
      ],
    },
    {
      id: 20,
      title: "Garantie en claim",
      subsections: [
        "20.1. Voor zover toegestaan onder het toepasselijke recht wijst HT alle verklaringen, garanties en toezeggingen af met betrekking tot de informatie, software, producten en services op deze website.",
        "20.2. HT helpt in het kader van een goede service haar klanten bij het indienen van een schadeclaim bij een derde.",
      ],
    },
  ],
};

const TermsAndConditions = () => {
  return (
    <section className="relative py-16 px-6 overflow-hidden min-h-125 flex items-center justify-center w-full">
      {/* BACKGROUND IMAGE OVERLAY */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.22] pointer-events-none z-0"
        style={{ backgroundImage: "url('/assets/about-us/3.webp')" }}
      />

      {/* CARD */}
      <div className="relative z-10 max-w-6xl mx-auto bg-white/50 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/40">
        <h2 className="text-4xl font-bold mb-3">
          {termsData.hero.title.line1}{" "}
          <span className="text-[#0F91D5]">
            <br />
            {termsData.hero.title.highlight}
          </span>
        </h2>

        <p className="text-sm text-gray-700 leading-relaxed mb-6">
          {termsData.hero.description}
        </p>

        {/* FIRST TWO COLUMN SECTION (Article 1 and Article 2 with Image next to them) */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            {termsData.sections.slice(0, 2).map((section: Section) => (
              <div key={section.id} className="mb-6">
                <h3 className="text-[#0F91D5] font-bold">
                  Artikel {section.id}. {section.title}
                </h3>

                {section.subsections?.map((item: string, index: number) => (
                  <p
                    key={index}
                    className="text-sm text-gray-700 leading-relaxed mt-2"
                  >
                    {item}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* IMAGE RIGHT ALIGNED */}
          <div className="flex justify-center items-start pt-4">
            <img
              src={termsData.sections[0]?.image}
              alt="Algemene voorwaarden"
              className="w-full max-w-md max-h-90 object-contain rounded-2xl"
            />
          </div>
        </div>

        {/* REST OF THE SECTIONS (Artikel 3 onward) */}
        <div className="mt-10 space-y-8">
          {termsData.sections
            .slice(2)
            .map((section: Section) => (
              <section key={section.id}>
                <h3 className="text-[#0F91D5] font-bold text-lg">
                  Artikel {section.id}. {section.title}
                </h3>

                {section.subsections?.map((item: string, index: number) => (
                  <p
                    key={index}
                    className="text-sm text-gray-700 leading-relaxed mt-2"
                  >
                    {item}
                  </p>
                ))}
              </section>
            ))}
        </div>
      </div>
    </section>
  )
}

export default TermsAndConditions
