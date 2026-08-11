import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalH2, LegalP } from "@/components/LegalLayout";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – Taxiizi" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Impressum,
});

function Impressum() {
  return (
    <LegalLayout label="Rechtliches" title="Impressum">
      <LegalH2>Angaben gemäß § 5 DDG</LegalH2>
      <LegalP>
        Taxiunternehmen Tüymen Izzet
        <br />
        Taxiizi – Taxi und Limousine Service
        <br />
        Engelhardstr. 6
        <br />
        81369 München
      </LegalP>

      <LegalH2>Kontakt</LegalH2>
      <LegalP>
        Telefon: +49 1573 9288899
        <br />
        Telefon: +49 151 29446834
        <br />
        E-Mail: taxi.izi@gmx.de
      </LegalP>

      <LegalH2>Berufsbezeichnung und Aufsichtsbehörde</LegalH2>
      <LegalP>
        Berufsbezeichnung: Taxi- und Mietwagenunternehmer (verliehen in der Bundesrepublik Deutschland)
        <br />
        Es gelten die Regelungen des Personenbeförderungsgesetzes (PBefG).
        <br />
        Konzessionsnummer: 2447
      </LegalP>
      <LegalP>
        Zuständige Genehmigungs- und Aufsichtsbehörde:
        <br />
        Landeshauptstadt München – Kreisverwaltungsreferat
        <br />
        Ruppertstraße 19, 80337 München
      </LegalP>

      <LegalH2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</LegalH2>
      <LegalP>
        Izzet Tüymen
        <br />
        Engelhardstr. 6
        <br />
        81369 München
      </LegalP>

      <LegalH2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</LegalH2>
      <LegalP>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </LegalP>

      <LegalH2>Haftung für Inhalte</LegalH2>
      <LegalP>
        Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den
        allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht
        verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
        zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
      </LegalP>
      <LegalP>
        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
        Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
        Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
        Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
      </LegalP>

      <LegalH2>Haftung für Links</LegalH2>
      <LegalP>
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss
        haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte
        der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
        Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
        Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
      </LegalP>

      <LegalH2>Urheberrecht</LegalH2>
      <LegalP>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
        deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
        außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen
        Autors bzw. Erstellers.
      </LegalP>

      <LegalH2>Hinweis zu KI-generierten Inhalten</LegalH2>
      <LegalP>
        Teile der Inhalte dieser Website (Texte und Bilder) wurden mit Unterstützung von künstlicher
        Intelligenz erstellt und redaktionell geprüft.
      </LegalP>
    </LegalLayout>
  );
}
