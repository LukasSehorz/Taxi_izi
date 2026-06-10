import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalH2, LegalH3, LegalP } from "@/components/LegalLayout";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung – Taxiizi" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Datenschutz,
});

function Datenschutz() {
  return (
    <LegalLayout label="Rechtliches" title="Datenschutzerklärung">
      <LegalH2>1. Verantwortlicher</LegalH2>
      <LegalP>
        Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
      </LegalP>
      <LegalP>
        Taxiunternehmen Tüymen Izzet
        <br />
        Taxiizi – Taxi und Limousine Service
        <br />
        Engelhardstr. 6
        <br />
        81369 München
        <br />
        Telefon: +49 1573 9288899
        <br />
        E-Mail: taxi.izi@gmx.de
      </LegalP>

      <LegalH2>2. Allgemeine Hinweise</LegalH2>
      <LegalP>
        Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir behandeln Ihre
        personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften
        sowie dieser Datenschutzerklärung. Die Nutzung unserer Website ist in der Regel ohne Angabe
        personenbezogener Daten möglich. Soweit personenbezogene Daten (z. B. Name oder Telefonnummer)
        erhoben werden, erfolgt dies, soweit möglich, auf freiwilliger Basis.
      </LegalP>

      <LegalH2>3. Hosting und Server-Logfiles</LegalH2>
      <LegalP>
        Beim Aufruf unserer Website werden durch den Hosting-Anbieter automatisch Informationen in
        sogenannten Server-Logfiles gespeichert, die Ihr Browser automatisch übermittelt. Dies sind:
      </LegalP>
      <ul className="list-disc pl-6 text-ink/75 leading-relaxed mb-4 space-y-1">
        <li>Browsertyp und Browserversion</li>
        <li>Verwendetes Betriebssystem</li>
        <li>Referrer-URL</li>
        <li>Hostname des zugreifenden Rechners</li>
        <li>Uhrzeit der Serveranfrage</li>
        <li>IP-Adresse</li>
      </ul>
      <LegalP>
        Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung
        dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein
        berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner
        Website – hierzu müssen die Server-Logfiles erfasst werden. Die Daten werden nach kurzer Zeit
        automatisch gelöscht.
      </LegalP>

      <LegalH2>4. Kontaktaufnahme</LegalH2>
      <LegalH3>Kontaktformular</LegalH3>
      <LegalP>
        Wenn Sie uns über das Kontaktformular eine Anfrage zukommen lassen, werden Ihre Angaben aus dem
        Formular (Name, Telefonnummer, Nachricht) zwecks Bearbeitung der Anfrage und für den Fall von
        Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
      </LegalP>
      <LegalP>
        Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der
        Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
        erforderlich ist (z. B. Anfrage einer Fahrt). In allen übrigen Fällen beruht die Verarbeitung auf
        unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen
        (Art. 6 Abs. 1 lit. f DSGVO).
      </LegalP>
      <LegalP>
        Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung
        auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung
        entfällt. Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben
        unberührt.
      </LegalP>

      <LegalH3>Kontakt per Telefon</LegalH3>
      <LegalP>
        Bei der Kontaktaufnahme per Telefon verarbeiten wir Ihre Telefonnummer sowie die im Gespräch
        mitgeteilten Daten (z. B. Name, Abholadresse, Fahrtziel) ausschließlich zur Durchführung und
        Organisation der angefragten Fahrt (Art. 6 Abs. 1 lit. b DSGVO).
      </LegalP>

      <LegalH3>Kontakt per WhatsApp</LegalH3>
      <LegalP>
        Wir bieten Ihnen die Möglichkeit, uns über den Messenger-Dienst WhatsApp zu kontaktieren.
        Anbieter ist die WhatsApp Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2,
        Irland. Wenn Sie uns über WhatsApp kontaktieren, werden Ihre Daten (z. B. Telefonnummer,
        Profilname, Nachrichteninhalte) durch WhatsApp verarbeitet. Dabei können Daten auch an Server der
        Meta Platforms Inc. in die USA übertragen werden. Weitere Informationen finden Sie in der
        Datenschutzerklärung von WhatsApp:{" "}
        <a
          href="https://www.whatsapp.com/legal/privacy-policy-eea"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-accent"
        >
          https://www.whatsapp.com/legal/privacy-policy-eea
        </a>
        . Die Nutzung von WhatsApp erfolgt auf Grundlage Ihrer freiwilligen Kontaktaufnahme
        (Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO). Die Datenübermittlung in die USA wird auf den
        Angemessenheitsbeschluss der EU-Kommission zum EU-US Data Privacy Framework gestützt; Meta
        Platforms Inc. ist unter diesem Rahmenwerk zertifiziert.
      </LegalP>

      <LegalH2>5. Schriftarten (lokales Hosting)</LegalH2>
      <LegalP>
        Diese Website nutzt zur einheitlichen Darstellung von Schriftarten sogenannte Web Fonts
        (Google Fonts), die lokal auf unserem Server installiert sind. Eine Verbindung zu Servern von
        Google findet dabei nicht statt. Es werden keine Daten an Google übertragen.
      </LegalP>

      <LegalH2>6. Cookies und Tracking</LegalH2>
      <LegalP>
        Diese Website verwendet keine Cookies zu Analyse-, Tracking- oder Marketingzwecken und setzt
        keine Analyse-Tools (wie z. B. Google Analytics) ein. Aus diesem Grund wird kein Cookie-Banner
        benötigt.
      </LegalP>

      <LegalH2>7. SSL- bzw. TLS-Verschlüsselung</LegalH2>
      <LegalP>
        Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte,
        wie zum Beispiel Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw.
        TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des
        Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
      </LegalP>

      <LegalH2>8. Speicherdauer</LegalH2>
      <LegalP>
        Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde,
        verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
        Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur
        Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich
        zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder
        handelsrechtliche Aufbewahrungsfristen).
      </LegalP>

      <LegalH2>9. Ihre Rechte</LegalH2>
      <LegalP>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf:</LegalP>
      <ul className="list-disc pl-6 text-ink/75 leading-relaxed mb-4 space-y-1">
        <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten (Art. 15 DSGVO)</li>
        <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
        <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
        <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
      </ul>
      <LegalP>
        Eine erteilte Einwilligung zur Datenverarbeitung können Sie jederzeit mit Wirkung für die Zukunft
        widerrufen. Hierzu reicht eine formlose Mitteilung an uns.
      </LegalP>
      <LegalP>
        Im Falle datenschutzrechtlicher Verstöße steht Ihnen zudem ein Beschwerderecht bei der zuständigen
        Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde in Bayern ist das Bayerische Landesamt für
        Datenschutzaufsicht (BayLDA), Promenade 18, 91522 Ansbach.
      </LegalP>

      <LegalH2>10. Aktualität dieser Datenschutzerklärung</LegalH2>
      <LegalP>
        Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Juni 2026. Durch die
        Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben
        kann es notwendig werden, diese Datenschutzerklärung zu ändern.
      </LegalP>
    </LegalLayout>
  );
}
