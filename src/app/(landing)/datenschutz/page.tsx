import React from "react";
import { antic } from "@/fonts";
import { PHONE_NUMBER } from "@/lib/constants";

export default function Page() {
  return (
    <div className="mx-auto mb-32 mt-48 flex max-w-4xl flex-col gap-4 px-3">
      <h1
        className={`font-mono ${antic.variable} scroll-m-20 text-5xl md:text-6xl`}
      >
        Datenschutzerklärung
      </h1>

      <p>
        Wir begrüßen Sie bei Ihrem Besuch auf unserer Webseite und freuen uns
        über Ihr Interesse an unserem Unternehmen. Wir nehmen den Schutz Ihrer
        persönlichen Daten sehr ernst. Wir verarbeiten Ihre Daten in
        Übereinstimmung mit den anwendbaren Rechtsvorschriften zum Schutz
        personenbezogener Daten, insbesondere der EU Datenschutz-Grundverordnung
        (EU-DS-GVO) und den für uns geltenden landesspezifischen
        Ausführungsgesetzen. Mithilfe dieser Datenschutzerklärung informieren
        wir Sie umfassend über die Verarbeitung Ihrer personenbezogenen Daten
        durch Herzensbilder Bauer und die Ihnen zustehenden Rechte.
      </p>

      <p>
        Personenbezogene Daten sind dabei diejenigen Informationen, die eine
        Identifizierung einer natürlichen Person möglich machen. Dazu gehören
        insbesondere Name, Geburtsdatum, Adresse, Telefonnummer, E-Mail-Adresse
        aber auch Ihre IP-Adresse. Anonyme Daten liegen vor, wenn keinerlei
        Personenbezug zum Nutzer hergestellt werden kann.
      </p>

      <h2 className="font-bold">
        Verantwortliche Stelle und Datenschutzbeauftragter:
      </h2>

      <p>Christian Bauer</p>
      <p>Jüdtstr. 24</p>
      <p>91522 Ansbach</p>

      <h2 className="font-bold">Kontakt:</h2>
      <p>Telefon: {PHONE_NUMBER}</p>
      <p>Email: hey@herzensbilderbauer.de</p>

      <h2 className="font-bold">Ihre Rechte als betroffene Person:</h2>

      <p>
        Zunächst möchten wir Sie an dieser Stelle über Ihre Rechte als
        betroffene Person informieren. Diese Rechte sind in den Art. 15 - 22
        EU-DS-GVO normiert. Dies umfasst:
      </p>

      <p>
        Das Recht auf Auskunft (Art. 15 EU-DS-GVO), Das Recht auf Löschung (Art.
        17 EU-DS-GVO), Das Recht auf Berichtigung (Art. 16 EU-DS-GVO), Das Recht
        auf Datenübertragbarkeit (Art. 20 EU-DSGVO), Das Recht auf Einschränkung
        der Datenverarbeitung (Art. 18 EU-DS-GVO), Das Widerspruchsrecht gegen
        die Datenverarbeitung (Art. 21 EU-DS-GVO). Um diese Rechte geltend zu
        machen, wenden Sie sich bitte an: hey(at)herzensbilderbauer.de. Gleiches
        gilt, wenn Sie Fragen zur Datenverarbeitung in unserem Unternehmen haben
        oder eine erteilte Einwilligung widerrufen möchten. Ihnen steht zudem
        ein Beschwerderecht an eine Datenschutzaufsichtsbehörde zu.
      </p>

      <h2 className="font-bold">Widerspruchsrechte</h2>

      <p>
        Bitte beachten Sie im Zusammenhang mit Widerspruchsrechten folgendes:
      </p>

      <p>
        Wenn wir Ihre personenbezogenen Daten zum Zwecke der Direktwerbung
        verarbeiten, haben Sie das Recht, dieser Datenverarbeitung jederzeit
        ohne Angaben von Gründen zu widersprechen. Dies gilt auch für ein
        Profiling, soweit es mit der Direktwerbung in Verbindung steht. Wenn Sie
        der Verarbeitung für Zwecke der Direktwerbung widersprechen, so werden
        wir Ihre personenbezogenen Daten nicht mehr für diese Zwecke
        verarbeiten. Der Widerspruch ist kostenlos und kann formfrei erfolgen,
        möglichst an: hey(at)herzensbilderbauer.de. Für den Fall, dass wir Ihre
        Daten zur Wahrung berechtigter Interessen verarbeiten, können Sie dieser
        Verarbeitung aus Gründen, die sich aus Ihrer besonderen Situation
        ergeben, jederzeit widersprechen; dies gilt auch für ein auf diese
        Bestimmungen gestütztes Profiling. Wir verarbeiten Ihre
        personenbezogenen Daten dann nicht mehr, es sei denn, wir können
        zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre
        Interessen, Rechte und Freiheiten überwiegen oder die Verarbeitung dient
        der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
      </p>

      <h2 className="font-bold">
        Zwecke und Rechtsgrundlagen der Datenverarbeitung
      </h2>

      <p>
        Bei der Verarbeitung Ihrer personenbezogenen Daten werden die
        Bestimmungen der EU-DS-GVO und alle sonstigen geltenden
        datenschutzrechtlichen Bestimmungen eingehalten. Rechtsgrundlagen für
        die Datenverarbeitung ergeben sich insbesondere aus Art. 6 EU-DS-GVO.
        Wir verwenden Ihre Daten zur Geschäftsanbahnung, zur Erfüllung
        vertraglicher und gesetzlicher Pflichten, zur Durchführung des
        Vertragsverhältnisses, zum Anbieten von Produkten und Dienstleistungen
        sowie zur Stärkung der Kundenbeziehung, was auch Analysen zu
        Marketingzwecken und Direktwerbung beinhalten kann. Ihre Einwilligung in
        die Datenverarbeitung kann auch eine datenschutzrechtliche
        Erlaubnisvorschrift darstellen. Vor Erteilung der Einwilligung klären
        wir Sie über den Zweck der Datenverarbeitung und über Ihr Widerrufsrecht
        auf. Sollte sich die Einwilligung auch auf die Verarbeitung besonderer
        Kategorien von personenbezogenen Daten beziehen, werden wir Sie in der
        Einwilligung ausdrücklich darauf hinweisen. Eine Verarbeitung besonderer
        Kategorien personenbezogener Daten gem. Art. 9 EU-DS-GVO erfolgt nur
        dann, wenn dies aufgrund rechtlicher Vorschriften erforderlich ist und
        kein Grund zu der Annahme besteht, dass Ihr schutzwürdiges Interesse an
        dem Ausschluss der Verarbeitung überwiegt.
      </p>

      <h2 className="font-bold">Weitergabe an Dritte</h2>

      <p>
        Wir werden Ihre Daten nur im Rahmen der gesetzlichen Bestimmungen oder
        bei entsprechender Einwilligung an Dritte weitergeben. Ansonsten erfolgt
        eine Weitergabe an Dritte nicht, es sei denn wir sind hierzu aufgrund
        zwingender Rechtsvorschriften verpflichtet (Weitergabe an externe
        Stellen wie z.B. Aufsichtsbehörden oder Strafverfolgungsbehörden).
      </p>

      <h2 className="font-bold">
        Empfänger der Daten / Kategorien von Empfängern
      </h2>

      <p>
        Innerhalb unseres Unternehmens stellen wir sicher, dass nur diejenigen
        Personen Ihre Daten erhalten, die diese zur Erfüllung der vertraglichen
        und gesetzlichen Pflichten benötigen. In bestimmten Fällen unterstützen
        Dienstleister unsere Fachabteilungen bei der Erfüllung ihrer Aufgaben.
        Mit allen Dienstleistern wurde das notwendige datenschutzrechtliche
        Vertragswerk abgeschlossen.
      </p>

      <h2 className="font-bold">
        Drittlandübermittlung / Drittlandsübermittlungsabsicht
      </h2>

      <p>
        Eine Datenübermittlung in Drittstaaten (außerhalb der Europäischen Union
        bzw. des Europäischen Wirtschaftsraums) findet nur statt, soweit dies
        zur Durchführung des Schuldverhältnisses erforderlich, gesetzlich
        vorgeschrieben ist oder Sie uns dazu Ihre Einwilligung erteilt haben.
        Wir übermitteln Ihre personenbezogenen Daten an keinen Dienstleister
        oder an Konzernunternehmen außerhalb des Europäischen Wirtschaftsraums.
      </p>

      <h2 className="font-bold">Speicherdauer der Daten</h2>

      <p>
        Wir speichern Ihre Daten solange diese für den jeweiligen
        Verarbeitungszweck benötigt werden. Bitte beachten Sie, dass zahlreiche
        Aufbewahrungsfristen bedingen, dass Daten weiterhin gespeichert werden
        (müssen). Dies betrifft insbesondere handelsrechtliche oder
        steuerrechtliche Aufbewahrungspflichten (z.B. Handelsgesetzbuch,
        Abgabenordnung, etc.). Sofern keine weitergehenden
        Aufbewahrungspflichten bestehen, werden die Daten nach Zweckerreichung
        routinemäßig gelöscht. Hinzu kommt, dass wir Daten aufbewahren können,
        wenn Sie uns hierfür Ihre Erlaubnis erteilt haben oder wenn es zu
        rechtlichen Auseinandersetzungen kommt und wir Beweismittel im Rahmen
        gesetzlicher Verjährungsfristen nutzen, die bis zu dreißig Jahre
        betragen können; die regelmäßige Verjährungsfrist beträgt drei Jahre.
      </p>

      <h2 className="font-bold">Sichere Übertragung Ihrer Daten</h2>

      <p>
        Um die bei uns gespeicherten Daten bestmöglich gegen zufällige oder
        vorsätzliche Manipulationen, Verlust, Zerstörung oder den Zugriff
        unberechtigter Personen zu schützen, setzen wir entsprechende technische
        und organisatorische Sicherheitsmaßnahmen ein. Die Sicherheitslevel
        werden in Zusammenarbeit mit Sicherheitsexperten laufend überprüft und
        an neue Sicherheitsstandards angepasst. Der Datenaustausch von und zu
        unserer Webseite findet jeweils verschlüsselt statt. Als
        Übertragungsprotokoll bieten wir für unseren Webauftritt HTTPS an,
        jeweils unter Verwendung der aktuellen Verschlüsselungsprotokolle.
        (SHA-256 mit RSA-Verschlüsselung). Außerdem besteht die Möglichkeit,
        alternative Kommunikationswege zu nutzen (z. B. den Postweg).
      </p>

      <h2 className="font-bold">Verpflichtung zur Bereitstellung der Daten</h2>

      <p>
        Diverse personenbezogene Daten sind für die Begründung, Durchführung und
        Beendigung des Schuldverhältnisses und der Erfüllung der damit
        verbundenen vertraglichen und gesetzlichen Pflichten notwendig. Gleiches
        gilt für die Nutzung unserer Webseite und der verschiedenen Funktionen,
        die diese zur Verfügung stellt. Details dazu haben wir im o.g. Punkt für
        Sie zusammengefasst. In bestimmten Fällen müssen Daten auch aufgrund
        gesetzlicher Bestimmungen erhoben bzw. zur Verfügung gestellt werden.
        Bitte beachten Sie, dass eine Bearbeitung Ihrer Anfrage oder die
        Durchführung des zugrundeliegenden Schuldverhältnisses ohne
        Bereitstellung dieser Daten nicht möglich ist.
      </p>

      <h2 className="font-bold">Kategorien, Quellen und Herkunft der Daten</h2>

      <p>
        Welche Daten wir verarbeiten, bestimmt der jeweilige Kontext: Dies hängt
        davon ab, ob Sie z.B. eine Anfrage in unser Kontaktformular eingeben.
        Bitte beachten Sie, dass wir Informationen für besondere
        Verarbeitungssituationen gegebenenfalls auch gesondert an geeigneter
        Stelle zur Verfügung stellen, z.B. bei einer Kontaktanfrage.
      </p>

      <h2 className="font-bold">
        Beim Besuch unserer Webseite erheben und verarbeiten wir folgende Daten:
      </h2>

      <p>
        Name des Internet Service-Providers Angaben über die Webseite von der
        aus Sie uns besuchen Verwendeter Webbrowser und verwendetes
        Betriebssystem Die von Ihrem Internet Service Provider zugewiesene
        IP-Adresse Angeforderte Dateien, übertragene Datenmenge,
        Downloads/Dateiexport Angaben über die Webseiten, die Sie bei uns
        aufrufen inkl. Datum und Uhrzeit Aus Gründen der technischen Sicherheit
        (insbesondere zur Abwehr von Angriffsversuchen auf unseren Webserver)
        werden diese Daten gemäß Art. 6 Absatz 1 lit. F EU-DS-GVO gespeichert.
        Nach Beendigung der Sitzung, jedoch spätestens nach 7 Tagen, wird Ihre
        IP-Adresse gelöscht.
      </p>

      <h2 className="font-bold">
        Im Rahmen einer Kontaktanfrage erheben und verarbeiten wir folgende
        Daten:
      </h2>

      <p>
        Name, Vorname Kontaktdaten Anrede Angaben zu Wünschen und Interessen
      </p>

      <h2 className="font-bold">
        Im Rahmen der Registrierung im Downloadbereich verarbeiten wir folgende
        Daten:
      </h2>

      <p>
        Anrede Titel Vorname Nachname Firma Kundennummer E-Mail Straße
        Postleitzahl Wohnort Land Telefon Fax
      </p>

      <h2 className="font-bold">
        Im Rahmen der Schulungsanmeldung verarbeiten wir folgende Daten:
      </h2>

      <p>
        Firma Kundennummer Vorname Nachname Straße PLZ Ort (Firmensitz) Telefon
        Fax E-Mail
      </p>

      <h2 className="font-bold">Automatisierte Einzelfallentscheidungen</h2>

      <p>
        Wir nutzen keine rein automatisierten Verarbeitungsprozesse zur
        Herbeiführung einer Entscheidung.
      </p>

      <h2 className="font-bold">
        Cookies (Art. 6 Abs. 1 S. 1 lit. a, f EU-DS-GVO, § 25 Abs. 1, 2 TTDSG)
      </h2>

      <p>
        Unsere Internetseite verwendet an mehreren Stellen so genannte Cookies.
        Sie dienen dazu, unser Angebot nutzerfreundlicher, effektiver und
        sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem
        Endgerät abgelegt und gespeichert werden. Mittels dieser Cookies ist uns
        eine Analyse darüber möglich, wie Nutzer unsere Websites benutzen. So
        können wir die Websiteinhalte den Besucherbedürfnissen entsprechend
        gestalten. Zudem haben wir durch die Cookies die Möglichkeit, die
        Effektivität einer bestimmten Anzeige zu messen und ihre Platzierung
        beispielsweise in Abhängigkeit von den thematischen Nutzerinteressen
        erfolgen zu lassen. Die Rechtsgrundlage hierfür bildet Art. 6 Abs. 1
        lit. f EU-DS-GVO, § 25 Abs. 2 TTDSG bzw. bei Vorliegen einer
        Einwilligung Art. 6 Abs. 1 lit. a EU-DS-GVO, § 25 Abs. 1 TTDSG.
      </p>

      <h2 className="font-bold">Wir setzen folgende Cookies ein:</h2>

      <p>
        Eigene Cookies: Diese Art von Cookies werden von uns direkt gesteuert.
        Diese bleiben je nach Zweck dauerhaft – auch nach Beendigung der Sitzung
        – (sog. persistente Cookies, z. B.: Umsetzung von Opt-Out) gespeichert
        oder werden mit Beendigung des Browsers gelöscht (sog. Session-Cookies;
        sie haben nur für eine Browsersitzung Gültigkeit).
        Drittanbieter-Cookies: Diese Art von Cookies wird durch Drittanbieter
        gesteuert. Drittanbieter sind Anbieter, die insbesondere für uns auf
        anderen Webseiten Werbebanner einblenden. Diese nutzen Cookies, um z.B.
        die Information zu übermitteln, dass ein von Ihnen eingeblendetes
        Werbebanner zu einem Kauf geführt hat. (z.B. Conversion-Tracking).
        Hierbei kommen sog. temporäre/permanente Cookies zum Einsatz, die sich
        automatisch nach der vorgegebenen Zeit (in der Regel 6 Monate) löschen.
        Diese temporären oder auch permanenten Cookies werden auf Ihrem Endgerät
        gespeichert und löschen sich nach der vorgegebenen Zeit von allein. Auch
        die Cookies unserer Partnerunternehmen enthalten lediglich pseudonyme
        meist sogar anonyme Daten. Sie ermöglichen unseren Partner
        nachzuvollziehen, welche Produkte Sie sich angesehen haben, ob etwas
        gekauft wurde, welche Produkte gesucht wurden, etc. Hierbei erfassen
        einige unserer Werbepartner auch über die Webseiten hinaus Informationen
        darüber, welche Seiten von Ihnen zuvor besucht wurden oder für welche
        Produkte Sie sich beispielsweise interessiert haben. So ist es möglich,
        individuelle Werbung anzeigen zu können. Diese pseudonymen Daten werden
        zu keinem Zeitpunkt mit Ihren personenbezogenen Daten zusammengeführt.
        Die meisten Web-Browser akzeptieren Cookies automatisch. Natürlich
        können Sie Cookies auf Ihrem Endgerät auch manuell über die
        Einstellungen Ihres Browsers oder softwaregestützt deaktivieren,
        einschränken oder auch löschen. Bitte beachten Sie: Deaktivieren Sie die
        Setzung von Cookies, sind unter Umständen nicht alle Funktionen unserer
        Internetseite vollumfänglich nutzbar.
      </p>

      <h2 className="font-bold">Nutzerprofile / Webtracking-Verfahren</h2>
      <p>
        Matomo (ehemals Piwik) Auf dieser Website verwenden wir die
        Webanalysedienst-Software Matomo Analytics (www.matomo.org), ein Dienst
        des Anbieters InnoCraft Ltd., 150 Willis St, 6011 Wellington,
        Neuseeland, („Matomo“). Wir nutzen Matomo für die Verbesserung der
        Nutzerfreundlichkeit der Seite und zu statistischen Zwecken
        (statistischen Auswertung von Besucherzugriffen) auf Grundlage Ihrer
        Einwilligung nach Art. 6 Abs. 1 lit. a) EU-DS-GVO, § 25 Abs. 1 TTDSG.
        Die durch das Cookie erzeugten Informationen über Ihre Benutzung dieser
        Website (einschließlich Ihrer IP-Adresse) verbleiben auf den Servern von
        Herzensbilder Bauer und werden nicht an Dritte weitergegeben, es sei
        denn es ist gesetzlich vorgeschrieben. Die Daten werden anonymisiert
        erfasst. Eine Zuordnung von weiteren Informationen zu Ihrer IP-Adresse
        erfolgt in keinem Fall. Matomo erlaubt es, die Besucherströme dieser
        Website zu analysieren. Es hilft dabei zu verstehen, wie ein Besucher
        auf diese Website gekommen ist (bspw. über den sogenannten Referrer),
        auf welche Seiten wie häufig und wie lange zugegriffen wird oder welcher
        Browser zur Ansicht verwendet wurde. Diese Daten helfen dabei, das
        Angebot auf dieser Website zu verbessern. Wir können so erkennen, welche
        Angebote am interessantesten sind, wo ggf. die Navigation verbessert
        werden kann oder ob technische Voraussetzungen geschaffen werden müssen,
        damit diese Website fehlerfrei dargestellt werden kann. IP-Adressen
        werden vor Speicherung der Analysedaten automatisch anonymisiert. Matomo
        wurde darüber hinaus so konfiguriert, dass auch nur die anonymisierte
        IP-Adresse für die Aufbereitung der Daten genutzt wird. Ebenfalls
        beachtet Matomo die „Do-not-track“-Einstellung Ihres Browsers. Die
        Speicherdauer der Daten beträgt 30 Tage. Wenn Sie mit der Speicherung
        und Auswertung dieser Daten aus Ihrem Besuch nicht einverstanden sind,
        dann können Sie der Speicherung und Nutzung in den Cookie-Einstellungen
        jederzeit widersprechen. In diesem Fall wird in Ihrem Browser ein sog.
        Opt-Out-Cookie abgelegt, was zur Folge hat, dass wir keinerlei
        Sitzungsdaten erheben. Bitte beachten Sie, dass die vollständige
        Löschung Ihrer Cookies zur Folge hat, dass auch das Opt-Out-Cookie
        gelöscht wird und ggf. von Ihnen erneut aktiviert werden muss. Solange
        Sie den Widerspruch gegen die Speicherung der erfassten Besucherdaten
        aufrechterhalten wollten, dürfen Sie das vorgenannte Cookie nicht
        löschen, da sonst die Beachtung Ihres Widerspruchs technisch von uns
        nicht mehr gewährleistet werden kann. Weitere Informationen und die
        geltenden Datenschutzbestimmungen von Matomo können unter
        https://matomo.org/privacy/ abgerufen werden.
      </p>

      <h2 className="font-bold">
        Google Maps (Art. 6 Abs. 1 lit. a EU-DS-GVO)
      </h2>

      <p>
        Wir verwenden auf der Grundlage Ihrer Einwilligung gem. Art. 6 Abs. 1 S.
        1 lit. a EU-DS-GVO Google Maps (API) von Google Ireland Limited, Gordon
        House, Barrow Street, Dublin 4, Irland ("Google”). Google Maps ist ein
        Webdienst zur Darstellung von interaktiven Landkarten, um geographische
        Informationen visuell darzustellen. Bereits beim Aufrufen derjenigen
        Unterseiten, in die die Karte von Google Maps eingebunden ist, werden
        Informationen über Ihre Nutzung unserer Website (wie z. B. Ihre
        IP-Adresse) an Server von Google in den USA übertragen und dort
        gespeichert. Dies erfolgt unabhängig davon, ob Google ein Nutzerkonto
        bereitstellt, über das Sie eingeloggt sind, oder ob kein Nutzerkonto
        besteht. Wenn Sie bei Google eingeloggt sind, werden Ihre Daten direkt
        Ihrem Konto zugeordnet. Wenn Sie die Zuordnung mit Ihrem Profil bei
        Google nicht wünschen, müssen Sie sich vor Aktivierung des Buttons
        ausloggen. Google speichert Ihre Daten (selbst für nicht eingeloggte
        Nutzer) als Nutzungsprofile und wertet diese aus. Eine solche Auswertung
        erfolgt auf Grund Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a
        EU-DS-GVO und ermöglicht die Einblendung personalisierter Werbung,
        Marktforschung und/oder bedarfsgerechten Gestaltung der Website. Sie
        können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft
        widerrufen. Hierzu rufen Sie ganz einfach unser Consent-Banner auf und
        ändern die Einstellungen entsprechend ab. Bitte beachten Sie, dass die
        Änderung in den Consent-Banner-Einstellungen für jedes Endgerät einzeln
        vorgenommen werden muss.
      </p>

      <h2 className="font-bold">Links Soziale Medien</h2>

      <p>
        Auf unserer Webseite finden Sie Links zu den Soziale Medien Diensten von
        Facebook, Xing, LinkedIn, YouTube und Instagram. Links zu den
        Internetseiten der Soziale Medien Diensten erkennen Sie an dem
        jeweiligen Unternehmens-Logo. Wenn Sie diesen Links folgen, erreichen
        Sie den Unternehmensauftritt von Herzensbilder Bauer bei dem jeweiligen
        Sozialen Medien Dienst. Bei dem Anklicken eines Links zu einem Sozialen
        Medien Dienst wird eine Verbindung zu den Servern des Sozialen Medien
        Dienstes hergestellt. Hierdurch wird an die Server des Sozialen Medien
        Dienstes übermittelt, dass Sie unsere Webseite besucht haben. Darüber
        hinaus werden weitere Daten an den Anbieter des Sozialen Medien Dienstes
        übertragen. Das sind beispielsweise:
      </p>

      <p>
        Adresse der Webseite, auf der sich der aktivierte Link befindet Datum
        und Uhrzeit des Aufrufs der Webseite bzw. der Aktivierung des Links
        Informationen über den verwendeten Browser und das verwendete
        Betriebssystem IP-Adresse Wenn Sie im Zeitpunkt der Aktivierung des
        Links bereits bei dem entsprechenden Sozialen Medien Dienst eingeloggt
        sind, kann der Anbieter des Sozialen Medien Dienstes in der Lage sein,
        aus den übermittelten Daten Ihren Benutzernamen und ggf. sogar Ihren
        echten Namen zu ermitteln und diese Informationen Ihrem persönlichen
        Benutzerkonto bei dem Sozialen Medien Dienst zuordnen. Sie können diese
        Möglichkeit der Zuordnung zu Ihrem persönlichen Benutzerkonto
        ausschließen, wenn Sie sich vorher aus Ihrem Benutzerkonto ausloggen.
      </p>

      <p>
        Die Server der Sozialen Medien Dienste befinden sich in den USA und
        anderen Ländern außerhalb der Europäischen Union. Die Daten können durch
        den Anbieter des Sozialen Medien Dienstes daher auch in Ländern
        außerhalb der Europäischen Union verarbeitet werden. Bitte beachten Sie,
        dass Unternehmen in diesen Ländern einem Datenschutzgesetz unterliegen,
        das allgemein personenbezogene Daten nicht in demselben Maße schützt,
        wie es in den Mitgliedstaaten der Europäischen Union der Fall ist.
      </p>

      <p>
        Bitte beachten Sie, dass wir keinen Einfluss auf Umfang, Art und Zweck
        der Datenverarbeitung durch den Anbieter des Sozialen Medien Dienstes
        haben. Nähere Informationen zur Verwendung Ihrer Daten durch die auf
        unserer Webseite eingebundenen Sozialen Medien Dienste finden Sie in der
        Datenschutzrichtlinie des jeweiligen Sozialen Medien Dienstes.
      </p>

      <h2 className="font-bold">
        Kontaktformular / Kontaktaufnahme per E-Mail (Art. 6 Abs. 1 lit. a, b
        EU-DS-GVO)
      </h2>

      <p>
        Auf unserer Webseite ist ein Kontaktformular vorhanden, das für die
        elektronische Kontaktaufnahme genutzt werden kann. Wenn Sie uns über das
        Kontaktformular schreiben, verarbeiten wir Ihre im Rahmen des
        Kontaktformulars angegebenen Daten zur Kontaktaufnahme und Beantwortung
        Ihrer Fragen und Wünsche. Hierbei wird der Grundsatz der
        Datensparsamkeit und Datenvermeidung beachtet, indem Sie nur die Daten
        angeben müssen, die wir zwingend zur Kontaktaufnahme von Ihnen
        benötigen. Dies sind Ihre E-Mail-Adresse sowie das Nachrichtenfeld
        selbst. Zudem wird aus technischer Notwendigkeit sowie zur rechtlichen
        Absicherung Ihre IP-Adresse verarbeitet. Alle übrigen Daten sind
        freiwillige Felder und können optional (z.B. zur individuelleren
        Beantwortung ihrer Fragen) angegeben werden.
      </p>

      <p>
        Um die Sicherheit und Vertraulichkeit Ihrer Daten bestmöglich zu
        schützen, setzen wir entsprechende Sicherheitsmaßnahmen um. Ihre Anfrage
        wird verschlüsselt an uns übertragen Sofern Sie sich per E-Mail an uns
        wenden, werden wir die in der E-Mail mitgeteilten personenbezogenen
        Daten allein zum Zweck der Bearbeitung Ihrer Anfrage verarbeiten. Sofern
        Sie die angebotenen Formulare zur Kontaktaufnahme nicht nutzen, findet
        keine darüberhinausgehende Datenerhebung statt.
      </p>

      <h2 className="font-bold">
        Registrierung / Kundenkonto (Art. 6 Abs. 1 lit. a, b EU-DS-GVO)
      </h2>

      <p>
        Auf unserer Internetseite bieten wir Nutzern die Möglichkeit an, sich
        unter Angabe persönlicher Daten zu registrieren. Die Registrierung ist
        also entweder zur Erfüllung eines Vertrages mit Ihnen oder zur
        Durchführung vorvertraglicher Maßnahmen erforderlich oder möglich.
        Hierbei wird der Grundsatz der Datensparsamkeit und Datenvermeidung
        beachtet, da nur die für die Registrierung notwendigen Daten als
        Pflichtfeld mit einem Stern (*) gekennzeichnet sind. Dies sind z.B. die
        E-Mail-Adresse sowie Passwort inklusive Passwortwiederholung. Für die
        Bestellung in unserem Download-Center benötigen wir zudem Angaben zur
        Rechnungsanschrift (Anrede, Vorname, Nachname, Anschrift). Durch eine
        Registrierung auf unserer Internetseite werden zudem die IP-Adresse des
        Nutzers, das Datum sowie die Uhrzeit der Registrierung gespeichert
        (technische Hintergrunddaten). Mit Auslösen des Buttons „Jetzt
        registrieren“ geben Sie die Einwilligung zur Verarbeitung Ihrer Daten.
      </p>

      <p>
        Bitte beachten Sie: Das von Ihnen vergebene Passwort wird bei uns
        verschlüsselt gespeichert. Mitarbeiter und Mitarbeiterinnen von unserem
        Unternehmen können dieses Passwort nicht lesen. Sie können Ihnen daher
        keine Auskunft geben, sollten Sie Ihr Passwort vergessen haben. Nutzen
        Sie in diesem Fall die Funktion „Passwort vergessen“, mit der Ihnen ein
        automatisiert erzeugtes neues Passwort per E-Mail zugesendet wird. Kein
        Mitarbeiter/keine Mitarbeiterin ist berechtigt, von Ihnen telefonisch
        oder schriftlich Ihr Passwort abzufragen. Bitte nennen Sie daher nie Ihr
        Passwort, falls Ihnen derartige Anfragen zugehen. Selbstverständlich
        können Sie die Registrierung bzw. Ihr Kundenkonto auch wieder auflösen
        bzw. löschen. Bitte wenden Sie sich dazu an hey(at)herzensbilderbauer.de
        Über das Kunden-Center haben Sie die Möglichkeit auf den Bereich der
        Ersatzteilbestellung zu gelangen. Hierfür werden Ihre Zugangsdaten auch
        für unseren Online-Shop verwendet. Weitere Informationen bzgl. dieser
        Datenverarbeitung finden Sie unter dem Abschnitt „Nutzung
        ExportDynamic“.
      </p>

      <h2 className="font-bold">
        Anmeldung zu einer Schulung (Art. 6 Abs. 1 lit. b EU-DS-GVO)
      </h2>

      <p>
        Sie haben über unsere Webseite die Möglichkeit, sich für eine Schulung
        anzumelden. Wenn Sie sich anmelden, verarbeiten wir Ihre im Rahmen der
        Anmeldung angegebenen Daten für die Anmeldung und Durchführung der
        Schulung für die Sie sich angemeldet haben. Hierbei wird der Grundsatz
        der Datensparsamkeit und Datenvermeidung beachtet, indem Sie nur die
        Daten angeben müssen, die wir zwingend für die Schulungsanmeldung und
        -durchführung benötigen. Ohne diese Daten ist die Teilnahme an einer
        Schulung nicht möglich.
      </p>

      <h2 className="font-bold">
        Werbezwecke Bestandskunden (Art. 6 Abs. 1 lit. f EU-DS-GVO)
      </h2>

      <p>
        Wir sind daran interessiert, die Kundenbeziehung mit Ihnen zu pflegen
        und Ihnen Informationen und Angebote über unsere Produkte /
        Dienstleistungen zukommen zu lassen. Daher verarbeiten wir Ihre Daten,
        um Ihnen entsprechende Informationen und Angebote per E-Mail zuzusenden.
        Wenn Sie dies nicht wünschen, können Sie jederzeit der Verwendung Ihrer
        personenbezogenen Daten zum Zwecke der Direktwerbung widersprechen; dies
        gilt auch für ein Profiling, soweit es mit der Direktwerbung in
        Verbindung steht. Wenn Sie Widerspruch einlegen, werden wir Ihre Daten
        für diesen Zweck nicht mehr verarbeiten. Der Widerspruch kann ohne
        Angaben von Gründen kostenlos und formfrei erfolgen und sollte möglichst
        per E-Mail an hey(at)herzensbilderbauer.de oder auf dem Postweg an
        Christian Bauer, Brodswinden 23, D-91522 Ansbach gerichtet werden.
      </p>

      <h2 className="font-bold">Links zu anderen Anbietern</h2>

      <p>
        Unsere Webseite enthält – deutlich erkennbar – auch Links auf die
        Internet-Auftritte anderer Unternehmen. Soweit Links zu Webseiten
        anderer Anbieter vorhanden sind, haben wir auf deren Inhalte keinen
        Einfluss. Daher kann für diese Inhalte auch keine Gewähr und Haftung
        übernommen werden. Für die Inhalte dieser Seiten ist stets der jeweilige
        Anbieter oder Betreiber der Seiten verantwortlich.
      </p>
      <p>
        Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
        Rechtsverstöße und erkennbare Rechtsverletzungen geprüft. Rechtswidrige
        Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
        permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
        konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
        Bekanntwerden von Rechtsverletzungen werden derartige Links umgehend
        entfernt
      </p>

      <h2 className="font-bold">
        Datenschutzerklärung / Hinweise zum Datenschutz in den Sozialen Medien
      </h2>

      <p>
        Wir unterhalten Auftritte in den „Sozialen Medien“, vorliegend bei
        Facebook, Instagram, LinkedIn, Xing und YouTube. Soweit wir die
        Kontrolle über die Verarbeitung Ihrer Daten haben, stellen wir sicher,
        dass die geltenden Datenschutzbestimmungen eingehalten werden.
        Nachfolgend finden Sie in Bezug auf unsere Auftritte die wichtigsten
        Informationen zum Datenschutzrecht. Name und Anschrift der für den
        Betrieb Verantwortlichen Verantwortlich für die Unternehmensauftritte im
        Sinne der EU Datenschutz-Grundverordnung (EU-DS-GVO) sowie sonstiger
        datenschutzrechtlicher Bestimmungen ist neben uns die Facebook (Facebook
        Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2,
        Irland) Instagram (Facebook Ireland Ltd., 4 Grand Canal Square, Grand
        Canal Harbour, Dublin 2, Irland) Youtube (Google Ireland Ltd., Gordon
        House, Barrow Street, Dublin 4, Irland) LinkedIn (LinkedIn Ireland
        Unlimited Company Wilton Place, Dublin 2, Irland) Xing (XING AG,
        Dammtorstraße 29-32, 20354 Hamburg, Deutschland) Diese Plattformen und
        ihre Funktionen nutzen Sie jedoch in eigener Verantwortung. Dies gilt
        insbesondere für die Nutzung der interaktiven Funktionen (z. B.
        Kommentieren, Teilen, Bewerten). Wir weisen Sie weiterhin darauf hin,
        dass dabei Ihre Daten außerhalb des Raumes der Europäischen Union
        verarbeitet werden können. Bezüglich der US-Anbieter, weisen wir darauf
        hin, dass diese Anbieter durch entsprechende vertragliche Regelungen
        verpflichtet sind, die Datenschutzstandards der EU einzuhalten. Eine
        Datenverarbeitung bzw. -speicherung in Drittländern kann auch auf
        Grundlage Ihrer Einwilligung erfolgen (Art. 49 Abs. 1 S. 1 lit. a
        DSGVO), in diesem Fall werden Sie im Rahmen der Einholung Ihrer
        Einwilligung hierauf sowie auf die damit verbundenen Risiken gesondert
        hingewiesen.
      </p>

      <h2 className="font-bold">Zweck und Rechtsgrundlage</h2>

      <p>
        Wir selbst unterhalten die Fanseiten, um mit den Besuchern dieser Seiten
        zu kommunizieren und sie auf diesem Wege über unsere Angebote zu
        informieren. Zudem erheben wir Daten zu statistischen Zwecken, um die
        Inhalte weiterentwickeln und optimieren zu können und unser Angebot
        attraktiver zu gestalten. Die hierfür erforderlichen Daten (z.B.
        Gesamtzahl der Seitenaufrufe, Seitenaktivitäten und durch die Besucher
        bereitgestellte Daten, Interaktionen) werden seitens der Sozialen
        Netzwerke aufbereitet und uns zur Verfügung gestellt. Auf die Erzeugung
        und Darstellung haben wir keinen Einfluss. Zudem werden Ihre
        personenbezogenen Daten durch die Anbieter der Sozialen Medien, aber
        auch durch uns zu Marktforschungs- und Werbezwecken verarbeitet. So ist
        es möglich, dass z.B. aufgrund Ihres Nutzungsverhaltens und der sich
        daraus ergebenden Interessen Nutzungsprofile erstellt werden. Dadurch
        können unter anderem Werbeanzeigen innerhalb und außerhalb der
        Plattformen geschaltet werden, die Ihren Interessen entsprechen. Hierfür
        werden im Regelfall Cookies auf Ihrem Rechner gespeichert. Unabhängig
        davon können in Ihren Nutzungsprofilen auch Daten, die nicht direkt auf
        Ihren Endgeräten erhoben werden, gespeichert werden. Die Speicherung und
        Analyse erfolgt auch geräteübergreifend, dies gilt insbesondere, aber
        nicht ausschließlich, wenn Sie als Mitglied registriert und bei den
        jeweiligen Plattformen eingeloggt sind. Darüber hinaus erheben und
        verarbeiten wir keine personenbezogenen Daten. Die Verarbeitung Ihrer
        personenbezogenen Daten durch uns erfolgt auf Grundlage unserer
        berechtigten Interessen an einer effektiven Information und
        Kommunikation gem. Art. 6 Abs. 1 S. 1 lit. f. EU-DS-GVO. Falls Sie um
        eine Einwilligung in die Datenverarbeitung gebeten werden, d. h. falls
        Sie Ihr Einverständnis durch Bestätigung einer Schaltfläche oder
        ähnliches (Opt-In) erklären, ist die Rechtsgrundlage der Verarbeitung
        Art. 6 Abs. 1 S. 1 lit. a., Art. 7 EU-DS-GVO.
      </p>

      <h2 className="font-bold">Ihre Rechte / Widerspruchsmöglichkeit</h2>

      <p>
        Wenn Sie Mitglied eines Sozialen Netzwerks sind und nicht möchten, dass
        das Netzwerk über unseren Auftritt Daten über Sie sammelt und mit Ihren
        gespeicherten Mitgliedsdaten beim jeweiligen Netzwerk verknüpft, müssen
        Sie sich vor Ihrem Besuch unserer Fanseite beim jeweiligen Netzwerk
        ausloggen, die auf dem Gerät vorhandenen Cookies löschen und Ihren
        Browser beenden und neu starten. Nach einer erneuten Anmeldung sind Sie
        allerdings für das Netzwerk erneut als bestimmte/r Nutzerin/Nutzer
        erkennbar. Für eine detaillierte Darstellung der jeweiligen
        Verarbeitungen und der Widerspruchsmöglichkeiten (Opt-Out), verweisen
        wir auf die nachfolgend verlinkten Angaben: Facebook
        Datenschutzerklärung: www.facebook.com/about/privacy/; Opt-Out:
        www.facebook.com/settings und www.youronlinechoices.com. Instagram
        Datenschutzerklärung: help.instagram.com/519522125107875; Opt-Out:
        www.networkadvertising.org/managing/opt_out.asp und
        www.youronlinechoices.com. Youtube Datenschutzerklärung:
        policies.google.com/privacy; Opt-Out: tools.google.com/dlpage/gaoptout
        und www.youronlinechoices.com. LinkedIn Datenschutzerklärung:
        www.linkedin.com/legal/privacy-policy Opt-Out:
        www.linkedin.com/psettings/guest-controls/retargeting-opt-out Xing
        Datenschutzerklärung: privacy.xing.com/de/datenschutzerklaerung Opt-Out:
        privacy.xing.com/de/datenschutzerklaerung
      </p>

      <h2 className="font-bold">
        Insgesamt stehen Ihnen folgende Rechte bezüglich der Verarbeitung Ihrer
        personenbezogenen Daten zu:
      </h2>

      <p>
        Recht auf Auskunft; Recht auf Berichtigung; Recht auf Löschung; Recht
        auf Einschränkung der Verarbeitung; Recht auf Widerspruch; Recht auf
        Datenübertragbarkeit; Recht auf Beschwerde über rechtswidrige
        Verarbeitungen Ihrer personenbezogenen Daten bei der zuständigen
        Datenschutzbehörde. Nachdem wir jedoch keinen vollständigen Zugriff auf
        Ihre personenbezogenen Daten haben, sollten Sie sich bei der
        Geltendmachung direkt an die Anbieter der Sozialen Medien wenden, denn
        diese haben jeweils Zugriff auf die personenbezogenen Daten ihrer Nutzer
        und können entsprechende Maßnahmen ergreifen und Auskünfte geben.
        Sollten Sie dennoch Hilfe benötigen, versuchen wir Sie natürlich zu
        unterstützen. Wenden Sie sich bitte an hey(at)herzensbilderbauer.de
      </p>

      <h2 className="font-bold">Cookies</h2>
      <p>
        Cookies sind kleine Textdateien, die von Webseiten verwendet werden, um
        die Benutzererfahrung effizienter zu gestalten. Laut Gesetz können wir
        Cookies auf Ihrem Gerät speichern, wenn diese für den Betrieb dieser
        Seite unbedingt notwendig sind. Für alle anderen Cookie-Typen benötigen
        wir Ihre Erlaubnis. Diese Seite verwendet unterschiedliche Cookie-Typen.
        Einige Cookies werden von Drittparteien platziert, die auf unseren
        Seiten erscheinen. Sie können Ihre Einwilligung jederzeit von der
        Cookie-Erklärung auf unserer Website ändern oder widerrufen. Erfahren
        Sie in unserer Datenschutzrichtlinie mehr darüber, wer wir sind, wie Sie
        uns kontaktieren können und wie wir personenbezogene Daten verarbeiten.
        Bitte geben Sie Ihre Einwilligungs-ID und das Datum an, wenn Sie uns
        bezüglich Ihrer Einwilligung kontaktieren.
      </p>
    </div>
  );
}
