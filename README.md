# :calendar: Google Calendar Event Creator Script 

Ez a Google Apps Script eszköz használható események automatikus létrehozására a Google Naptárban. Az eseményeket a következő hét munkanapjaira hozza létre (hétfőtől péntekig), figyelembe véve a munkaidőt és a szüneteket.

## :sparkles: Jellemzők

- :clock1030: Paraméterezhető hosszúságú és tárgyú események létrehozása.
- :date: Események létrehozása a következő hét munkanapjaira.
- :no_entry_sign: Figyelembe veszi a már meglévő eseményeket és a szabad idősávokat.
- :coffee: Kizárja a déli szünetet (12:00-13:00) és a hétvégét (szombat, vasárnap).

## :hammer_and_wrench: Használat

1. :clipboard: Másold be a szkriptet a Google Apps Script szerkesztőbe.
2. :pencil2: Módosítsd a `createEvent(length, subject)` függvény hívását a kívánt esemény hosszával és tárgyával.
3. :play_or_pause_button: Futtasd le a szkriptet, és ellenőrizd a Google Naptáradban, hogy az események megfelelően létrejöttek-e.

## :warning: Követelmények

- Google fiók
- Google Apps Script használatára való jogosultság

## :bust_in_silhouette: Fejlesztő

OpenAI által kifejlesztett ChatGPT.

## :balance_scale: Lizenc

Az MIT lizenc alapján terjesztve. Részletekért lásd a [LICENSE](LICENSE) fájlt.

