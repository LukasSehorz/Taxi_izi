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
        Diese Website wird bei Netlify gehostet. Anbieter ist die Netlify, Inc., 512 2nd Street,
        Suite 200, San Francisco, CA 94107, USA (nachfolgend „Netlify"). Wenn Sie unsere Website
        besuchen, erfasst Netlify verschiedene Logfiles inklusive Ihrer IP-Adresse. Die Verwendung
        von Netlify erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO – wir haben ein
        berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website. Die
        Datenübertragung in die USA wird auf den Angemessenheitsbeschluss der EU-Kommission zum
        EU-US Data Privacy Framework gestützt; Netlify ist unter diesem Rahmenwerk zertifiziert.
        Wir haben mit Netlify einen Vertrag über Auftragsverarbeitung (Art. 28 DSGVO) geschlossen.
        Details entnehmen Sie der Datenschutzerklärung von Netlify:{" "}
        <a
          href="https://www.netlify.com/privacy/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-accent"
        >
          https://www.netlify.com/privacy/
        </a>
        .
      </LegalP>
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
      <LegalH3>Kontakt per Telefon</LegalH3>
      <LegalP>
        Bei der Kontaktaufnahme per Telefon verarbeiten wir Ihre Telefonnummer sowie die im Gespräch
        mitgeteilten Daten (z. B. Name, Abholadresse, Fahrtziel) ausschließlich zur Durchführung und
        Organisation der angefragten Fahrt (Art. 6 Abs. 1 lit. b DSGVO).
      </LegalP>

      <LegalH3>Kontakt per E-Mail</LegalH3>
      <LegalP>
        Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben (E-Mail-Adresse, Name sowie der
        Inhalt Ihrer Nachricht) zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen
        bei uns gespeichert. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
        sofern Ihre Anfrage mit der Anbahnung oder Durchführung einer Fahrt zusammenhängt, im Übrigen
        auf Grundlage unseres berechtigten Interesses an der effektiven Bearbeitung der an uns
        gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO). Diese Daten geben wir nicht ohne Ihre
        Einwilligung weiter.
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
        (Google Fonts), die lokal auf unserem Server installiert sind. Beim Laden der Schriftarten
        findet keine Verbindung zu Servern von Google statt; es werden hierbei keine Daten an Google
        übertragen. Für den separat eingesetzten Google Tag Manager gilt Ziffer 7.
      </LegalP>

      <LegalH2>6. Cookies und Einwilligung (Consent-Management)</LegalH2>
      <LegalP>
        Unsere Website verwendet Cookies bzw. vergleichbare Technologien (z. B. den lokalen Speicher
        Ihres Browsers). Technisch notwendige Cookies sind für den Betrieb der Website erforderlich
        und werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO bzw. § 25 Abs. 2 TDDDG gespeichert.
        Alle übrigen Cookies – insbesondere zu Statistik-, Analyse- und Marketingzwecken – werden erst
        gesetzt, nachdem Sie über unseren Cookie-Banner ausdrücklich eingewilligt haben
        (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG).
      </LegalP>
      <LegalP>
        Ihre Einwilligungsentscheidung speichern wir im lokalen Speicher Ihres Browsers unter dem
        Schlüssel „cookie_consent_v1“, damit der Banner Ihnen nicht bei jedem Besuch erneut angezeigt
        wird. Diese Speicherung enthält keine personenbezogenen Daten, sondern lediglich Ihre Auswahl
        sowie den Zeitpunkt der Einwilligung.
      </LegalP>
      <LegalP>
        Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen oder ändern.
        Klicken Sie dazu im Seitenfuß auf „Cookie-Einstellungen“. Bis zu Ihrer Einwilligung werden
        keine Analyse- oder Marketing-Cookies gesetzt und keine entsprechenden Daten an Google
        übermittelt.
      </LegalP>

      <LegalH2>7. Google Tag Manager und Google-Dienste</LegalH2>
      <LegalP>
        Wir setzen den Google Tag Manager ein. Anbieter ist die Google Ireland Limited, Gordon House,
        Barrow Street, Dublin 4, Irland. Der Google Tag Manager ist ein Werkzeug, mit dem wir
        Website-Tags (z. B. für Statistik oder Marketing) verwalten und einbinden können. Der Google
        Tag Manager selbst erstellt keine Nutzerprofile, speichert keine Cookies mit
        personenbezogenen Daten und führt keine eigenständige Analyse durch. Er dient ausschließlich
        der Verwaltung und Auslösung der über ihn eingebundenen Dienste.
      </LegalP>
      <LegalP>
        Beim Aufruf der Website wird das Skript des Google Tag Managers von einem Google-Server
        geladen; dabei wird Ihre IP-Adresse an Google übertragen. Über den Google Tag Manager können
        – ausschließlich nach Ihrer Einwilligung – weitere Google-Dienste (z. B. Google Analytics
        oder Google Ads) geladen werden, die Cookies setzen und Nutzungsdaten verarbeiten.
      </LegalP>
      <LegalP>
        Wir verwenden den sogenannten Google Consent Mode v2. Dabei werden Google-Dienste standardmäßig
        so gesteuert, dass für Analyse und Marketing zunächst keine Einwilligung vorliegt
        („denied“). Erst wenn Sie im Cookie-Banner zustimmen, wird der Einwilligungsstatus
        entsprechend Ihrer Auswahl aktualisiert und die jeweiligen Dienste dürfen Cookies setzen.
      </LegalP>
      <LegalP>
        Rechtsgrundlage für den Einsatz ist Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO sowie
        § 25 Abs. 1 TDDDG. Eine Datenübermittlung in die USA kann nicht ausgeschlossen werden; sie
        wird auf den Angemessenheitsbeschluss der EU-Kommission zum EU-US Data Privacy Framework
        gestützt, unter dem Google LLC zertifiziert ist. Ergänzend hat Google die
        Standardvertragsklauseln der EU-Kommission abgeschlossen. Weitere Informationen finden Sie in
        den Nutzungsbedingungen des Google Tag Managers und in der Datenschutzerklärung von Google:{" "}
        <a
          href="https://policies.google.com/privacy?hl=de"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-accent"
        >
          https://policies.google.com/privacy
        </a>
        .
      </LegalP>

      <LegalH2>8. SSL- bzw. TLS-Verschlüsselung</LegalH2>
      <LegalP>
        Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte,
        wie zum Beispiel Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw.
        TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des
        Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
      </LegalP>

      <LegalH2>9. Speicherdauer</LegalH2>
      <LegalP>
        Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde,
        verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
        Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur
        Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich
        zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder
        handelsrechtliche Aufbewahrungsfristen).
      </LegalP>

      <LegalH2>10. Ihre Rechte</LegalH2>
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

      <LegalH2>11. Aktualität dieser Datenschutzerklärung</LegalH2>
      <LegalP>
        Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Juli 2026. Durch die
        Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben
        kann es notwendig werden, diese Datenschutzerklärung zu ändern.
      </LegalP>
    </LegalLayout>
  );
}
