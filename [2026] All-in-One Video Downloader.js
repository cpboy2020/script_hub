// ==UserScript==
// @name         🔥 [2026] All-in-One Video Downloader | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @namespace    https://tenzaa.com/
// @version      2026.1108.1
// @description  [2026 Latest] Download ANY video and audio from YouTube, TikTok, X(Twitter), Instagram, Facebook. Support 4K, 1080P, MP3, MP4, no watermark.
// @author       classccai
// @icon         https://tenzaa.com/favicon.ico
// @match        *://*.youtube.com/*
// @match        *://youtube.com/*
// @match        *://youtu.be/*
// @match        *://x.com/*
// @match        *://twitter.com/*
// @match        *://*.tiktok.com/*
// @match        *://tiktok.com/*
// @match        *://*.instagram.com/*
// @match        *://instagram.com/*
// @match        *://*.facebook.com/*
// @match        *://facebook.com/*
// @match        *://tenzaa.com/*
// @match        https://tenzaa.com/*
// @grant        GM_xmlhttpRequest
// @grant        GM_addStyle
// @grant        GM_download
// @connect      p.savenow.to
// @connect      *.savenow.to
// @connect      savenow.to
// @connect      en.loader.to
// @connect      loader.to
// @connect      api.snapwc.com
// @connect      facebook.com
// @connect      *.facebook.com
// @connect      fbcdn.net
// @connect      *.fbcdn.net
// @connect      instagram.com
// @connect      *.instagram.com
// @connect      cdninstagram.com
// @connect      *.cdninstagram.com
// @connect      video.twimg.com
// @connect      *.twimg.com
// @connect      cdn.syndication.twimg.com
// @connect      syndication.twimg.com
// @connect      tiktokcdn.com
// @connect      *.tiktokcdn.com
// @connect      tiktokcdn-us.com
// @connect      *.tiktokcdn-us.com
// @connect      tiktok.com
// @connect      *.tiktok.com
// @connect      akamaized.net
// @require      https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.2.0/crypto-js.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/jsencrypt/3.3.2/jsencrypt.min.js
// @run-at       document-end
// @license      MIT

// @name:af      🔥 Alles-in-een Video Aflaaier | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:af Laai enige video van YouTube, TikTok, X(Twitter), Instagram, Facebook af.
// @name:am      🔥 ሁሉንም በአንድ ቪዲዮ አውራጅ | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:am ማንኛውንም ቪዲዮ ከ YouTube, TikTok, X(Twitter), Instagram, Facebook ያውርዱ።
// @name:ar      🔥 محمل الفيديو الكل في واحد | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:ar تنزيل أي فيديو من YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:as      🔥 অল-ইন-ৱান ভিডিঅ' ডাউনলোডাৰ | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:as যিকোনো ভিডিঅ' ডাউনলোড কৰক YouTube, TikTok, X(Twitter), Instagram, Facebook পৰা।
// @name:az      🔥 Hər Şey Bir Arada Video Yükləyici | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:az YouTube, TikTok, X(Twitter), Instagram, Facebook-dan videoları endirin.
// @name:be      🔥 Універсальны загрузнік відэа | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:be Спампоўвайце відэа з YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:bg      🔥 Всичко-в-едно изтегляне на відэа | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:bg Изтеглете видео ад YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:bn      🔥 অল-ইন-ওয়ান ভিডিও ডাউনলোডার | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:bn YouTube, TikTok, X(Twitter), Instagram, Facebook থেকে ভিডিও ডাউনলোড করুন।
// @name:bs      🔥 Sve-u-jednom Video Preuzimač | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:bs Preuzmite videozapise sa YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:ca      🔥 Descarregador de vídeos Tot en Un | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:ca Baixeu vídeos de YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:cs      🔥 All-in-One Video Downloader | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:cs Stáhněte si videa z YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:da      🔥 Alt-i-en Video Downloader | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:da Download videoer fra YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:de      🔥 All-in-One Video Downloader | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:de Laden Sie Videos von YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:dz      🔥 ཆ་ཚང་བརྙན་འཁོར་ཕབ་ལེན། | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:dz YouTube, TikTok, X(Twitter), Instagram, Facebook ལས་བརྙན་འཁོར་ཕབ་ལེན།
// @name:el      🔥 Λήψη βίντεο Όλα σε Ένα | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:el Λήψη βίντεο από YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:en      🔥 All-in-One Video Downloader | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:en Download videos from YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:en-GB   🔥 All-in-One Video Downloader | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:en-GB Download videos from YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:en-US   🔥 All-in-One Video Downloader | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:en-US Download videos from YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:eo      🔥 Ĉio-en-unu Video Elŝutilo | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:eo Elŝutu videojn de YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:es      🔥 Descargador de vídeos Todo en Uno | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:es Descarga vídeos de YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:es-419  🔥 Descargador de vídeos Todo en Uno | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:es-419 Descarga vídeos de YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:es-US   🔥 Descargador de vídeos Todo en Uno | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:es-US Descarga vídeos de YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:et      🔥 Kõik-ühes video allalaadija | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:et Laadige alla videoid YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:eu      🔥 Dena-batean Bideo Deskargatzailea | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:eu Deskargatu bideoak YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:fa      🔥 دانلودر ویدیوی همه‌کاره | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:fa ویدیوها را از YouTube, TikTok, X(Twitter), Instagram, Facebook دانلود کنید.
// @name:fi      🔥 Kaikki yhdessä -videolataaja | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:fi Lataa videoita YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:fil     🔥 All-in-One Video Downloader | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:fil I-download ang mga video mula sa YouTube, TikTok, X(Twitter), Instagram.
// @name:fr      🔥 Téléchargeur de vidéos Tout-en-un | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:fr Téléchargez des vidéos de YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:fr-CA   🔥 Téléchargeur de vidéos Tout-en-un | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:fr-CA Téléchargez des vidéos de YouTube, TikTok, X(Twitter), Instagram.
// @name:ga      🔥 Íoslódálaí Físeáin Uile-i-Aon | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:ga Íoslódáil físeáin ó YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:gl      🔥 Descargador de vídeos Todo en Un | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:gl Descarga vídeos de YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:gn      🔥 Ta'anga Mýi Mboguejyha | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:gn Emboguejy ta'anga mýi YouTube, TikTok, X(Twitter), Instagram, Facebook-gui.
// @name:gu      🔥 ઑલ-ઇન-વન વિડિઓ ડાઉનલોડર | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:gu YouTube, TikTok, X(Twitter), Instagram, Facebook પરથી વિડિઓઝ ડાઉનલોડ કરો.
// @name:ha      🔥 All-in-One Bidiyo Downloader | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:ha Zazzage bidiyon YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:hi      🔥 ऑल-इन-वन वीडियो डाउनलोडर | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:hi YouTube, TikTok, X(Twitter), Instagram, Facebook से वीडियो डाउनलोड करें।
// @name:hr      🔥 Sve-u-jednom Video Downloader | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:hr Preuzmite videozapise s YouTubea, TikToka, X(Twitter), Instagrama.
// @name:hu      🔥 Minden-az-egyben Videó Letöltő | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:hu Töltsön le videókat a YouTube, TikTok, X(Twitter), Instagram oldalakról.
// @name:hy      🔥 Համապարփակ Վիդեո Ներբեռնիչ | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:hy Ներբեռնեք տեսանյութեր YouTube, TikTok, X(Twitter), Instagram, Facebook-ից:
// @name:id      🔥 Pengunduh Video All-in-One | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:id Unduh video dari YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:ig      🔥 Ihe Nbudata Vidiyo Niile | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:ig Budata vidiyo na YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:is      🔥 Allt-í-einu Myndbanda Niðurhalari | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:is Sæktu myndbönd frá YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:it      🔥 Scarica Video Tutto-in-Uno | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:it Scarica video da YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:iw      🔥 מוריד וידאו הכל באחד | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:iw הורד סרטונים מ-YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:ja      🔥 オールインワン動画ダウンローダー | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:ja YouTube、TikTok、X(Twitter)、Instagram、Facebookから動画をダウンロード。
// @name:jv      🔥 Pengunduh Video All-in-One | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:jv Unduh video saka YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:ka      🔥 All-in-One ვიდეო ჩამომტვირთავი | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:ka ჩამოტვირთეთ ვიდეოები YouTube, TikTok, X(Twitter), Instagram-დან.
// @name:kk      🔥 Барлығы бір бейне жүктеуші | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:kk YouTube, TikTok, X(Twitter), Instagram, Facebook бейнелерін жүктеңіз.
// @name:km      🔥 កម្មវិធីទាញយកវីដេអូទាំងអស់ក្នុងមួយ | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:km ទាញយកវីដេអូពី YouTube, TikTok, X(Twitter), Instagram, Facebook។
// @name:kn      🔥 ಆಲ್-ಇನ್-ಒನ್ ವೀಡಿಯೊ ಡೌನ್‌ಲೋಡರ್ | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:kn YouTube, TikTok, X(Twitter), Instagram, Facebook ನಿಂದ ವೀಡಿಯೊಗಳನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ.
// @name:ko      🔥 올인원 비디오 다운로더 | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:ko YouTube, TikTok, X(Twitter), Instagram, Facebook에서 비디오를 다운로드하세요.
// @name:ku      🔥 Daxistina Vîdyoyan a Hemî-di-Yek de | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:ku Vîdyoyan ji YouTube, TikTok, X(Twitter), Instagram, Facebook daxin.
// @name:ky      🔥 Баары бир видео жүктөөчү | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:ky YouTube, TikTok, X(Twitter), Instagram, Facebook видеолорун жүктөп алыңыз.
// @name:la      🔥 Omnia-in-Uno Video Descensor | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:la Videos de YouTube, TikTok, X(Twitter), Instagram, Facebook detrahe.
// @name:lb      🔥 All-an-Engem Video Downloader | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:lb Luet Videoe vu YouTube, TikTok, X(Twitter), Instagram, Facebook erof.
// @name:lo      🔥 ໂປຣແກຣມດາວໂຫລດວິດີໂອທັງໝົດໃນອັນດຽວ | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:lo ດາວໂຫລດວິດີໂອຈາກ YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:lt      🔥 Viskas viename vaizdo įrašų atsisiuntėjas | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:lt Atsisiųskite vaizdo įrašus iš YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:lv      🔥 Viss-vienā video lejupielādētājs | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:lv Lejupielādējiet video no YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:mg      🔥 Mpanala Horonantsary Iray Manontolo | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:mg Maka horonantsary avy amin'ny YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:mi      🔥 Katoa-i-Roto Kaiwhakauru Ataata | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:mi Tikiake ataata mai i YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:mk      🔥 Сè-во-едно преземач на видеа | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:mk Преземајте видеа од YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:ml      🔥 ഓൾ-ഇൻ-വൺ വീഡിയോ ഡൗൺലോഡർ | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:ml YouTube, TikTok, X(Twitter), Instagram, Facebook എന്നിവയിൽ നിന്ന് വീഡിയോകൾ ഡൗൺലോഡ് ചെയ്യുക.
// @name:mn      🔥 Бүгд нэг дор видео татагч | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:mn YouTube, TikTok, X(Twitter), Instagram, Facebook-аас видео татаж аваарай.
// @name:mr      🔥 ऑल-इन-वन व्हिडिओ डाउनलोडर | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:mr YouTube, TikTok, X(Twitter), Instagram, Facebook वरून व्हिडिओ डाउनलोड करा.
// @name:ms      🔥 Pemuat Turun Video Semua-dalam-Satu | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:ms Muat turun video dari YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:mt      🔥 Niżżel il-Vidjows Kollha F'Wieħed | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:mt Niżżel vidjows minn YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:my      🔥 အားလုံးပါဝင်သော ဗီဒီယိုဒေါင်းလုဒ်ဆွဲစနစ် | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:my YouTube, TikTok, X(Twitter), Instagram, Facebook မှ ဗီဒီယိုများကို ဒေါင်းလုဒ်လုပ်ပါ။
// @name:ne      🔥 सबै-मा-एक भिडियो डाउनलोडर | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:ne YouTube, TikTok, X(Twitter), Instagram, Facebook बाट भिडियोहरू डाउनलोड गर्नुहोस्।
// @name:nl      🔥 Alles-in-één Video Downloader | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:nl Download video's van YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:no      🔥 Alt-i-ett Video Nedlaster | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:no Last ned videoer fra YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:ny      🔥 Yense-mwa-Imodzi Yotsitsa Kanema | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:ny Tsitsani makanema kuchokera ku YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:or      🔥 ଅଲ୍-ଇନ୍-ୱାନ୍ ଭିଡିଓ ଡାଉନଲୋଡର୍ | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:or YouTube, TikTok, X(Twitter), Instagram, Facebook ରୁ ଭିଡିଓ ଡାଉନଲୋଡ୍ କରନ୍ତୁ।
// @name:pa      🔥 ਆਲ-ਇਨ-ਵਨ ਵੀਡੀਓ ਡਾਊਨਲੋਡਰ | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:pa YouTube, TikTok, X(Twitter), Instagram, Facebook ਤੋਂ ਵੀਡੀਓ ਡਾਊਨਲੋਡ ਕਰੋ।
// @name:pl      🔥 Wszystko w jednym pobieracz wideo | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:pl Pobieraj filmy z YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:ps      🔥 ټول په یو کې د ویډیو ډاونلوډر | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:ps د YouTube, TikTok, X(Twitter), Instagram, Facebook څخه ویډیوګانې ډاونلوډ کړئ.
// @name:pt      🔥 Baixador de Vídeos Tudo-em-Um | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:pt Baixe vídeos do YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:pt-BR   🔥 Baixador de Vídeos Tudo-em-Um | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:pt-BR Baixe vídeos do YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:pt-PT   🔥 Descarregador de Vídeos Tudo-em-Um | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:pt-PT Descarregue vídeos do YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:ro      🔥 Descărcător Video Tot-în-Unu | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:ro Descărcați videoclipuri de pe YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:ru      🔥 Универсальный загрузчик видео | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:ru Скачивайте видео с YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:rw      🔥 Byose-muri-Bimwe Kumanura Amashusho | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:rw Manura amashusho kuri YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:sd      🔥 سڀ ڪجهه هڪ ۾ وڊيو ڊائون لوڊر | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:sd YouTube, TikTok, X(Twitter), Instagram, Facebook مان وڊيوز ڊائون لوڊ ڪريو.
// @name:si      🔥 සියල්ල එකම වීඩියෝ බාගත කරන්නා | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:si YouTube, TikTok, X(Twitter), Instagram, Facebook වෙතින් වීඩියෝ බාගන්න.
// @name:sk      🔥 All-in-One Video Downloader | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:sk Sťahujte videá z YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:sl      🔥 Vse-v-enem video prenosnik | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:sl Prenašajte videoposnetke z YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:sm      🔥 La'uina o Vitio Uma-i-Le-Tasi | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:sm La'u mai vitio mai YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:sn      🔥 Zvese-mune-Chimwe Vhidhiyo Dhawunirodha | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:sn Dhawunirodha mavhidhiyo kubva kuYouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:so      🔥 Dhammaan-ku-Jira Soo Dejiyaha Fiidiyowga | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:so Ka soo deji fiidiyowyada YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:sq      🔥 Shkarkues Videosh Gjithçka-në-Një | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:sq Shkarkoni video nga YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:sr      🔥 Све-у-једном видео преузимач | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:sr Преузмите видео записе са YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:st      🔥 All-in-One Video Downloader | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:st Jarolla livideo ho tsoa ho YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:su      🔥 Sadaya-dina-Hiji Pangunduh Video | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:su Unduh video ti YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:sv      🔥 Allt-i-ett Video Nedladdare | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:sv Ladda ner videor från YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:sw      🔥 Kipakuzi cha Video Zote-katika-Moja | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:sw Pakua video kutoka YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:ta      🔥 ஆல்-இன்-ஒன் வீடியோ பதிவிறக்கி | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:ta YouTube, TikTok, X(Twitter), Instagram, Facebook இலிருந்து வீடியோக்களைப் பதிவிறக்கவும்.
// @name:te      🔥 ఆల్-ఇన్-వన్ వీడియో డౌన్‌లోడర్ | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:te YouTube, TikTok, X(Twitter), Instagram, Facebook నుండి వీడియోలను డౌన్‌లోడ్ చేయండి.
// @name:tg      🔥 Боргири ҳамаҷонибаи видео | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:tg Видеоҳоро аз YouTube, TikTok, X(Twitter), Instagram, Facebook боргирӣ кунед.
// @name:th      🔥 เครื่องมือดาวน์โหลดวิดีโอแบบ All-in-One | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:th ดาวน์โหลดวิดีโอจาก YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:ti      🔥 ኩሉ ኣብ ሓደ ቪድዮ መውረዲ | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:ti ካብ YouTube, TikTok, X(Twitter), Instagram, Facebook ቪድዮታት ኣውርድ።
// @name:tk      🔥 Ähli-birinde Wideo Ýükleýji | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:tk YouTube, TikTok, X(Twitter), Instagram, Facebook-dan wideolary ýükläň.
// @name:tl      🔥 All-in-One Tagapag-download ng Video | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:tl Mag-download ng mga video mula sa YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:tr      🔥 Hepsi Bir Arada Video İndirici | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:tr YouTube, TikTok, X(Twitter), Instagram, Facebook'tan videoları indirin.
// @name:tt      🔥 Барысы бергә видео йөкләгеч | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:tt YouTube, TikTok, X(Twitter), Instagram, Facebook-тан видеолар йөкләү.
// @name:ug      🔥 ھەممىسى بىر بېكەتتە سىن چۈشۈرگۈچ | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:ug YouTube, TikTok, X(Twitter), Instagram, Facebook تىن سىنلارنى چۈشۈرۈڭ.
// @name:uk      🔥 Універсальний завантажувач відео | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:uk Завантажуйте відео з YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:ur      🔥 آل ان ون ویڈیو ڈاؤنلوڈر | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:ur YouTube, TikTok, X(Twitter), Instagram, Facebook سے ویڈیوز ڈاؤن لوڈ کریں۔
// @name:uz      🔥 Hammasi bitta Video Yuklab Oluvchi | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:uz YouTube, TikTok, X(Twitter), Instagram, Facebook-dan videolarni yuklab oling.
// @name:vi      🔥 Trình tải xuống video Tất cả trong Một | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:vi Tải xuống video từ YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:yo      🔥 Ohun Nkan Gbigbasilẹ Fidio Gbogbo-ni-Ẹkan | YouTube, TikTok, X(Twitter), Instagram
// @description:yo Gba awọn fidio lati YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @name:zh-CN   🔥 [2026] 万能视频下载器 | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:zh-CN [2026最新] 一键下载YouTube、TikTok、X(Twitter)、Instagram、Facebook等平台视频与音频。支持4K、1080P高清画质及MP3/MP4无水印极速下载。
// @name:zh-HK   🔥 [2026] 萬能影片下載器 | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:zh-HK [2026最新] 一鍵下載YouTube、TikTok、X(Twitter)、Instagram、Facebook等平台影片與音訊。支援4K、1080P超高畫質及MP3/MP4無浮水印極速下載。
// @name:zh-TW   🔥 [2026] 萬能影片下載器 | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:zh-TW [2026最新] 一鍵下載YouTube、TikTok、X(Twitter)、Instagram、Facebook等平台影片與音訊。支援4K、1080P超高畫質及MP3/MP4無浮水印極速下載。
// @name:zu      🔥 Konke-ku-Kunye Isilandi se-Video | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @description:zu Landa amavidiyo kusuka ku-YouTube, TikTok, X(Twitter), Instagram, Facebook.
// @downloadURL https://update.greasyfork.org/scripts/574417/%F0%9F%94%A5%20%5B2026%5D%20All-in-One%20Video%20Downloader%20%7C%20YouTube%2C%20TikTok%2C%20X%28Twitter%29%2C%20Instagram%2C%20Facebook.user.js
// @updateURL https://update.greasyfork.org/scripts/574417/%F0%9F%94%A5%20%5B2026%5D%20All-in-One%20Video%20Downloader%20%7C%20YouTube%2C%20TikTok%2C%20X%28Twitter%29%2C%20Instagram%2C%20Facebook.meta.js
// ==/UserScript==

(function () {
    "use strict";

    console.log("🔥 [AIO Video Downloader] Script loaded successfully on", location.href);

    // ============================================================
    // All-in-One Video Downloader (2026 Edition)
    // Dual-Engine Support:
    // 1. Loader.to Direct API (Pure HTTP cloud transcoding, 4K/1080P/MP3)
    // 2. SnapWC Direct API (RSA+AES high-speed multi-format stream parser)
    // Supported: YouTube, TikTok, X(Twitter), Instagram, Facebook
    // ============================================================

    var host = window.location.hostname;
    var platform = "youtube";

    if (/x\.com|twitter\.com/i.test(host)) platform = "twitter";
    if (/tiktok\.com/i.test(host)) platform = "tiktok";
    if (/instagram\.com/i.test(host)) platform = "instagram";
    if (/facebook\.com/i.test(host)) platform = "facebook";

    if (/tenzaa\.com|snapwc\.com|loader\.to|savenow\.to/i.test(host)) return;

    // Loader.to Official API Keys Pool (Round-Robin with auto-failover)
    var LOADER_API_KEYS = [
        "dfcb6d76f2f6a9894gjkege8a4ab232222",
        "01a61c3d0b2848cdba1420b7849d4e5d",
        "f2f6a9894gjkege8a4ab232222dfcb6d"
    ];

    // Current Active Engine: "loader" or "snapwc"
    var currentEngine = "loader";
    var currentTargetUrl = "";
    var currentVideoTitle = "";
    var currentVideoThumb = "";

    // ------------------------------------------------------------
    // 0. CSP TRUSTED TYPES BYPASS (Universal Policy for YouTube & Modern SPAs)
    // ------------------------------------------------------------
    var safeWindow = (typeof unsafeWindow !== "undefined") ? unsafeWindow : window;
    var tt = safeWindow.trustedTypes || (typeof window !== "undefined" && window.trustedTypes);
    var aioPolicy = null;
    if (tt && tt.createPolicy) {
        try {
            if (!tt.defaultPolicy) {
                tt.createPolicy("default", {
                    createHTML: function (s) { return s; },
                    createScript: function (s) { return s; },
                    createScriptURL: function (s) { return s; }
                });
            }
        } catch (e) {}
        try {
            aioPolicy = tt.createPolicy("aioTrustedPolicy", {
                createHTML: function (s) { return s; },
                createScript: function (s) { return s; },
                createScriptURL: function (s) { return s; }
            });
        } catch (e) {
            aioPolicy = tt.defaultPolicy;
        }
    }

    // ------------------------------------------------------------
    // 1. SAFE HTML RENDERING PIPELINE
    // ------------------------------------------------------------
    function setSafeHTML(element, htmlString) {
        if (!element) return;
        try {
            var safeHtml = (aioPolicy && aioPolicy.createHTML) ? aioPolicy.createHTML(htmlString) : htmlString;
            var parser = new DOMParser();
            var doc = parser.parseFromString(safeHtml, "text/html");
            element.textContent = "";
            while (doc.body.firstChild) {
                element.appendChild(doc.body.firstChild);
            }
            return;
        } catch (e) {
            try {
                var safeHtml2 = (aioPolicy && aioPolicy.createHTML) ? aioPolicy.createHTML(htmlString) : htmlString;
                element.innerHTML = safeHtml2;
            } catch (err) {
                element.textContent = "Render error: " + err.message;
            }
        }
    }

    var styles = `
        #tenzaa-aio-btn {
            position: fixed;
            z-index: 2147483640 !important;
            background: rgba(20, 20, 20, 0.88);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            color: #fff;
            border: 1px solid rgba(255, 255, 255, 0.22);
            width: 42px;
            height: 42px;
            border-radius: 50%;
            display: none;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: background .2s, transform .15s, box-shadow .2s;
            pointer-events: auto !important;
            box-shadow: 0 4px 16px rgba(0, 0, 0, .55);
            font-size: 16px;
        }
        #tenzaa-aio-btn.tenzaa-hover {
            background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
            transform: scale(1.1);
            border-color: rgba(255, 255, 255, 0.5);
            box-shadow: 0 6px 20px rgba(239, 68, 68, 0.6);
        }
        #tenzaa-aio-btn svg { fill: currentColor; width: 22px; height: 22px; pointer-events: none; }

        #tenzaa-tip {
            position: fixed;
            z-index: 2147483639 !important;
            background: rgba(15, 23, 42, 0.95);
            color: #fff;
            padding: 6px 12px;
            border-radius: 8px;
            font: 12px/1.4 -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            pointer-events: none;
            display: none;
            white-space: nowrap;
            box-shadow: 0 4px 12px rgba(0,0,0,0.4);
            border: 1px solid rgba(255,255,255,0.1);
        }

        /* Completely Non-Intrusive Picture-in-Picture Floating Panel in Bottom-Right Corner */
        #aio-float-container {
            position: fixed !important;
            right: 24px !important;
            bottom: 24px !important;
            z-index: 2147483645 !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: flex-end !important;
            pointer-events: none !important; /* Never block clicks on background or video player */
            background: transparent !important;
            width: auto !important;
            height: auto !important;
            margin: 0 !important;
            padding: 0 !important;
            border: none !important;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        }

        #aio-modal {
            background: rgba(15, 23, 42, 0.96) !important;
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            color: #f1f5f9;
            width: 440px !important;
            max-width: calc(100vw - 36px) !important;
            max-height: 520px !important;
            border-radius: 18px;
            border: 1px solid rgba(255, 255, 255, 0.14);
            box-shadow: 0 16px 40px rgba(0, 0, 0, 0.65), 0 0 0 1px rgba(255, 255, 255, 0.08);
            display: none !important;
            flex-direction: column;
            overflow: hidden;
            pointer-events: auto !important; /* Only respond within this 440px card */
            transform: scale(0.92) translateY(20px);
            opacity: 0;
            transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.18s ease;
        }
        #aio-float-container.active:not(.minimized) #aio-modal {
            display: flex !important;
            transform: scale(1) translateY(0);
            opacity: 1;
        }

        #aio-min-pill {
            display: none !important;
            background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
            border: 1px solid rgba(59, 130, 246, 0.4);
            color: #fff;
            padding: 8px 16px;
            border-radius: 30px;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
            cursor: grab;
            align-items: center;
            gap: 8px;
            font-size: 13px;
            font-weight: 600;
            pointer-events: auto !important;
            transition: all 0.2s ease;
            user-select: none;
            -webkit-user-select: none;
            touch-action: none;
        }
        #aio-min-pill:hover {
            transform: scale(1.05);
            border-color: #3b82f6;
            box-shadow: 0 10px 28px rgba(59, 130, 246, 0.35);
        }
        #aio-min-pill.aio-dragging,
        #aio-min-pill.aio-dragging:hover {
            cursor: grabbing;
            transform: none;
        }
        #aio-float-container.active.minimized #aio-min-pill {
            display: flex !important;
        }
        .snapwc-header {
            padding: 12px 16px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            background: rgba(15, 23, 42, 0.98);
            cursor: grab;
            user-select: none;
            -webkit-user-select: none;
            touch-action: none;
        }
        .snapwc-header.aio-dragging {
            cursor: grabbing;
            background: rgba(30, 41, 59, 0.98);
        }
        #aio-float-container.aio-dragging #aio-modal {
            box-shadow: 0 24px 56px rgba(0, 0, 0, 0.75), 0 0 0 1px rgba(56, 189, 248, 0.45);
        }
        .snapwc-brand {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 14px;
            font-weight: 700;
            color: #fff;
        }
        .aio-brand-badge {
            display: inline-flex;
            align-items: center;
            gap: 3px;
            font-size: 11px;
            font-weight: 600;
            color: #38bdf8;
            background: rgba(56, 189, 248, 0.12);
            border: 1px solid rgba(56, 189, 248, 0.28);
            padding: 2px 7px;
            border-radius: 999px;
            text-decoration: none !important;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        .aio-brand-badge:hover {
            background: rgba(56, 189, 248, 0.25);
            color: #ffffff;
            border-color: #38bdf8;
            box-shadow: 0 0 10px rgba(56, 189, 248, 0.35);
        }

        /* Modal Footer / Official Website Promo */
        .aio-modal-footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 16px;
            background: rgba(15, 23, 42, 0.95);
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            font-size: 11.5px;
            color: #94a3b8;
            flex-shrink: 0;
        }
        .aio-footer-left {
            display: flex;
            align-items: center;
            gap: 6px;
        }
        .aio-footer-sparkle {
            font-size: 13px;
        }
        .aio-footer-text {
            color: #94a3b8;
            font-weight: 500;
        }
        .aio-footer-link {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            color: #38bdf8;
            text-decoration: none !important;
            font-weight: 600;
            font-size: 12px;
            padding: 4px 10px;
            background: rgba(56, 189, 248, 0.12);
            border: 1px solid rgba(56, 189, 248, 0.28);
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        .aio-footer-link:hover {
            color: #ffffff;
            background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
            border-color: #38bdf8;
            box-shadow: 0 2px 10px rgba(56, 189, 248, 0.3);
            transform: translateY(-1px);
        }
        .aio-link-arrow {
            font-size: 11px;
            transition: transform 0.2s;
        }
        .aio-footer-link:hover .aio-link-arrow {
            transform: translate(1px, -1px);
        }
        .snapwc-header-controls {
            display: flex;
            align-items: center;
            gap: 6px;
        }
        .snapwc-ctrl-btn {
            background: rgba(255, 255, 255, 0.08);
            border: none;
            color: #94a3b8;
            width: 28px;
            height: 28px;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            font-weight: bold;
            transition: background 0.2s, color 0.2s;
        }
        .snapwc-ctrl-btn:hover {
            background: rgba(255, 255, 255, 0.18);
            color: #fff;
        }
        .snapwc-ctrl-btn.close:hover {
            background: rgba(239, 68, 68, 0.2);
            color: #ef4444;
        }

        /* Dual Engine Tabs */
        .aio-engine-tabs {
            display: flex;
            background: rgba(30, 41, 59, 0.8);
            padding: 3px;
            border-radius: 10px;
            gap: 4px;
            margin: 10px 14px 0;
            border: 1px solid rgba(255, 255, 255, 0.06);
        }
        .aio-tab-btn {
            flex: 1;
            padding: 6px 10px;
            background: transparent;
            color: #94a3b8;
            border: none;
            border-radius: 7px;
            font-size: 12px;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
            transition: all 0.2s ease;
        }
        .aio-tab-btn.active {
            background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
            color: #ffffff;
            box-shadow: 0 2px 8px rgba(59, 130, 246, 0.4);
        }
        .aio-tab-btn:hover:not(.active) {
            color: #f1f5f9;
            background: rgba(255, 255, 255, 0.05);
        }

        .snapwc-body {
            padding: 12px 14px 18px;
            overflow-y: auto;
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        /* Video Info Card */
        .snapwc-video-info {
            display: flex;
            gap: 10px;
            padding: 10px;
            background: rgba(30, 41, 59, 0.5);
            border-radius: 10px;
            border: 1px solid rgba(255, 255, 255, 0.06);
            align-items: center;
        }
        .snapwc-thumb {
            width: 90px;
            height: 52px;
            border-radius: 6px;
            object-fit: cover;
            background: #1e293b;
            flex-shrink: 0;
        }
        .snapwc-meta {
            flex: 1;
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 6px;
        }
        .snapwc-title {
            font-size: 13.5px;
            font-weight: 600;
            color: #f8fafc;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            line-height: 1.4;
        }
        .snapwc-platform-tag {
            font-size: 11px;
            display: inline-flex;
            align-items: center;
            gap: 4px;
            color: #38bdf8;
            font-weight: 500;
        }

        /* Section Titles */
        .snapwc-section-title {
            font-size: 12.5px;
            font-weight: 700;
            color: #94a3b8;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            display: flex;
            align-items: center;
            gap: 6px;
            margin-bottom: 8px;
        }

        /* List Items */
        .snapwc-list {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
        .snapwc-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 14px;
            background: rgba(30, 41, 59, 0.5);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 10px;
            transition: background 0.15s, border-color 0.15s;
        }
        .snapwc-item:hover {
            background: rgba(30, 41, 59, 0.85);
            border-color: rgba(255, 255, 255, 0.12);
        }
        .snapwc-item-info {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .snapwc-badge {
            font-size: 11px;
            font-weight: 700;
            padding: 3px 8px;
            border-radius: 6px;
            background: rgba(59, 130, 246, 0.2);
            color: #60a5fa;
            border: 1px solid rgba(59, 130, 246, 0.3);
            min-width: 46px;
            text-align: center;
        }
        .snapwc-badge.ultra {
            background: rgba(168, 85, 247, 0.25);
            color: #c084fc;
            border-color: rgba(168, 85, 247, 0.4);
        }
        .snapwc-badge.green {
            background: rgba(16, 185, 129, 0.2);
            color: #34d399;
            border-color: rgba(16, 185, 129, 0.3);
        }
        .snapwc-badge.orange {
            background: rgba(245, 158, 11, 0.2);
            color: #fbbf24;
            border-color: rgba(245, 158, 11, 0.3);
        }
        .snapwc-size { font-size: 12px; color: #64748b; }

        .snapwc-actions {
            display: flex;
            gap: 8px;
            align-items: center;
        }
        .snapwc-btn-dl {
            background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
            color: #fff;
            border: none;
            padding: 6px 14px;
            border-radius: 7px;
            font-size: 12px;
            font-weight: 600;
            cursor: pointer;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 5px;
            transition: all 0.15s;
            white-space: nowrap;
        }
        .snapwc-btn-dl:hover {
            opacity: 0.92;
            transform: translateY(-1px);
        }
        .snapwc-btn-dl.ready {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            box-shadow: 0 2px 10px rgba(16, 185, 129, 0.4);
        }
        .snapwc-btn-dl.processing {
            background: rgba(59, 130, 246, 0.4);
            cursor: wait;
        }

        .snapwc-btn-copy {
            background: rgba(255, 255, 255, 0.08);
            color: #cbd5e1;
            border: 1px solid rgba(255, 255, 255, 0.12);
            padding: 6px 10px;
            border-radius: 7px;
            font-size: 12px;
            cursor: pointer;
            transition: background 0.2s, color 0.2s;
            white-space: nowrap;
        }
        .snapwc-btn-copy:hover {
            background: rgba(255, 255, 255, 0.15);
            color: #fff;
        }

        /* Progress Bar within Items */
        .loader-progress-wrap {
            display: flex;
            flex-direction: column;
            gap: 4px;
            min-width: 130px;
            text-align: right;
        }
        .loader-progress-bar {
            height: 4px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 2px;
            overflow: hidden;
            width: 100%;
        }
        .loader-progress-fill {
            height: 100%;
            background: linear-gradient(90deg, #3b82f6, #10b981);
            width: 0%;
            transition: width 0.3s ease;
        }
        .loader-progress-text {
            font-size: 11px;
            color: #94a3b8;
        }

        /* Loading Spinner */
        .snapwc-loading {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 16px;
            padding: 40px 20px;
        }
        .snapwc-spinner {
            width: 38px;
            height: 38px;
            border: 3px solid rgba(255, 255, 255, 0.1);
            border-top-color: #3b82f6;
            border-radius: 50%;
            animation: snapwc-spin 0.8s linear infinite;
        }
        @keyframes snapwc-spin {
            to { transform: rotate(360deg); }
        }
        .snapwc-loading-text {
            font-size: 13px;
            color: #94a3b8;
        }

        /* Captcha Card */
        .snapwc-captcha-box {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 14px;
            padding: 24px;
            background: rgba(30, 41, 59, 0.6);
            border-radius: 14px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            text-align: center;
        }
        .snapwc-captcha-title { font-size: 15px; font-weight: 700; color: #f8fafc; }
        .snapwc-captcha-desc { font-size: 12px; color: #94a3b8; }
        .snapwc-captcha-row {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .snapwc-captcha-img {
            height: 48px;
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            cursor: pointer;
        }
        .snapwc-captcha-input {
            width: 130px;
            height: 44px;
            background: rgba(15, 23, 42, 0.9);
            border: 1px solid rgba(59, 130, 246, 0.5);
            border-radius: 8px;
            color: #fff;
            font-size: 18px;
            font-weight: 700;
            text-align: center;
            letter-spacing: 4px;
            text-transform: uppercase;
            outline: none;
        }
        .snapwc-captcha-btn {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: #fff;
            border: none;
            padding: 10px 24px;
            border-radius: 8px;
            font-size: 13px;
            font-weight: 700;
            cursor: pointer;
            transition: opacity 0.2s;
        }
        .snapwc-captcha-btn:hover { opacity: 0.9; }

        /* Error Box */
        .snapwc-err-box {
            padding: 28px 20px;
            text-align: center;
            color: #f87171;
            font-size: 13px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
        }
        .aio-switch-btn {
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: #fff;
            padding: 8px 16px;
            border-radius: 8px;
            font-size: 12px;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.2s;
        }
        .aio-switch-btn:hover {
            background: rgba(59, 130, 246, 0.3);
            border-color: #3b82f6;
        }

        /* Auto-hide floating button, tooltip, and download modal in fullscreen mode */
        :fullscreen #tenzaa-aio-btn,
        :fullscreen #tenzaa-tip,
        :fullscreen #aio-float-container,
        :-webkit-full-screen #tenzaa-aio-btn,
        :-webkit-full-screen #tenzaa-tip,
        :-webkit-full-screen #aio-float-container,
        html:fullscreen #tenzaa-aio-btn,
        html:fullscreen #tenzaa-tip,
        html:fullscreen #aio-float-container,
        html:-webkit-full-screen #tenzaa-aio-btn,
        html:-webkit-full-screen #tenzaa-tip,
        html:-webkit-full-screen #aio-float-container,
        .aio-fullscreen-active #tenzaa-aio-btn,
        .aio-fullscreen-active #tenzaa-tip,
        .aio-fullscreen-active #aio-float-container,
        ytd-watch-flexy[fullscreen] ~ * #tenzaa-aio-btn,
        ytd-watch-flexy[fullscreen] ~ #tenzaa-aio-btn {
            display: none !important;
            opacity: 0 !important;
            pointer-events: none !important;
        }
    `;

    // ------------------------------------------------------------
    // 2. DOM ELEMENTS (Floating Button, Tooltip, Bottom-Right Panel)
    // ------------------------------------------------------------
    // Clean up any old residue from previous versions or reloads
    document.querySelectorAll("#tenzaa-aio-btn, #tenzaa-tip, #snapwc-overlay, #aio-float-container").forEach(function (el) {
        el.remove();
    });
    document.querySelectorAll("style").forEach(function (st) {
        if (st.id === "aio-style-tag" || (st.textContent && st.textContent.indexOf("#snapwc-overlay") !== -1)) {
            st.remove();
        }
    });

    function injectStyles() {
        try {
            if (typeof GM_addStyle === "function") {
                GM_addStyle(styles);
            }
        } catch (e) {}
        try {
            var doc = safeWindow.document || document;
            var existing = doc.getElementById("aio-style-tag");
            if (existing) existing.remove();
            var st = doc.createElement("style");
            st.id = "aio-style-tag";
            st.textContent = styles;
            (doc.head || doc.documentElement || doc.body).appendChild(st);
        } catch (e) {}
    }
    injectStyles();

    var btn = document.createElement("div");
    btn.id = "tenzaa-aio-btn";
    var svgNs = "http://www.w3.org/2000/svg";
    var svgIcon = document.createElementNS(svgNs, "svg");
    svgIcon.setAttribute("viewBox", "0 0 24 24");
    var path = document.createElementNS(svgNs, "path");
    path.setAttribute("d", "M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z");
    svgIcon.appendChild(path);
    btn.appendChild(svgIcon);
    document.body.appendChild(btn);

    var tip = document.createElement("div");
    tip.id = "tenzaa-tip";
    tip.textContent = "⚡ Fast Video Downloader";
    document.body.appendChild(tip);

    // Completely Non-Intrusive Picture-in-Picture Floating Panel
    var floatContainer = document.createElement("div");
    floatContainer.id = "aio-float-container";
    setSafeHTML(floatContainer, `
        <div id="aio-modal">
            <div class="snapwc-header">
                <div class="snapwc-brand">
                    <span>🔥</span>
                    <span>All-in-One Video Downloader</span>
                    <a href="https://tenzaa.com/" target="_blank" rel="noopener noreferrer" class="aio-brand-badge" title="Official Website: tenzaa.com">tenzaa.com ↗</a>
                </div>
                <div class="snapwc-header-controls">
                    <button class="snapwc-ctrl-btn" id="aio-minimize" title="Minimize to bottom-right">—</button>
                    <button class="snapwc-ctrl-btn close" id="aio-close" title="Close">&times;</button>
                </div>
            </div>
            <div class="aio-engine-tabs">
                <button class="aio-tab-btn active" id="tab-loader">🚀 Server 1 (High-Speed)</button>
                <button class="aio-tab-btn" id="tab-snapwc">⚡ Server 2 (Direct Stream)</button>
            </div>
            <div class="snapwc-body" id="snapwc-body"></div>
            <div class="aio-modal-footer">
                <div class="aio-footer-left">
                    <span class="aio-footer-sparkle">✨</span>
                    <span class="aio-footer-text">Online Web Tools:</span>
                </div>
                <a href="https://tenzaa.com/" target="_blank" rel="noopener noreferrer" class="aio-footer-link" title="Visit tenzaa.com official site">
                    <span>🌐 tenzaa.com</span>
                    <span class="aio-link-arrow">↗</span>
                </a>
            </div>
        </div>
        <div id="aio-min-pill" title="Click to expand downloader">
            <span>🔥</span>
            <span id="aio-min-text">Video Downloader</span>
        </div>
    `);
    document.body.appendChild(floatContainer);

    var modalBody = document.getElementById("snapwc-body");
    var closeBtn = document.getElementById("aio-close");
    var minBtn = document.getElementById("aio-minimize");
    var minPill = document.getElementById("aio-min-pill");
    var minText = document.getElementById("aio-min-text");
    var tabLoader = document.getElementById("tab-loader");
    var tabSnapwc = document.getElementById("tab-snapwc");

    function closeModal() {
        floatContainer.classList.remove("active");
        floatContainer.classList.remove("minimized");
    }
    function minimizeModal() {
        floatContainer.classList.add("minimized");
    }
    function restoreModal() {
        floatContainer.classList.remove("minimized");
        floatContainer.classList.add("active");
    }

    closeBtn.addEventListener("click", closeModal);
    minBtn.addEventListener("click", minimizeModal);
    minPill.addEventListener("click", restoreModal);

    floatContainer.addEventListener("click", function (e) {
        var link = e.target.closest("a[href*='tenzaa.com']");
        if (link) {
            e.stopPropagation();
        }
    }, true);

    tabLoader.addEventListener("click", function () {
        if (currentEngine === "loader") return;
        currentEngine = "loader";
        tabLoader.classList.add("active");
        tabSnapwc.classList.remove("active");
        renderLoaderEngineView(currentTargetUrl);
    });

    tabSnapwc.addEventListener("click", function () {
        if (currentEngine === "snapwc") return;
        currentEngine = "snapwc";
        tabSnapwc.classList.add("active");
        tabLoader.classList.remove("active");
        startSnapwcParseFlow(currentTargetUrl);
    });

    // ------------------------------------------------------------
    // 2.1 FREE DRAGGING OF THE PANEL
    //     Drag handle: the modal header (or the minimized pill).
    //     Uses pointer events so mouse / touch / pen all work.
    //     Position stays inside the viewport and is remembered.
    // ------------------------------------------------------------
    (function enableFreeDrag() {
        var POS_KEY = "aio_float_panel_pos_v1";
        var EDGE = 8;
        var storage = null;
        try { storage = window.localStorage; } catch (e) {}

        function readSaved() {
            try {
                var raw = storage && storage.getItem(POS_KEY);
                if (!raw) return null;
                var p = JSON.parse(raw);
                if (!p || !isFinite(p.x) || !isFinite(p.y)) return null;
                return p;
            } catch (e) { return null; }
        }

        // Keep the panel fully visible, even after a window resize.
        function clamp(x, y, w, h) {
            var maxX = Math.max(EDGE, window.innerWidth - (w || 440) - EDGE);
            var maxY = Math.max(EDGE, window.innerHeight - (h || 120) - EDGE);
            return {
                x: Math.min(Math.max(EDGE, x), maxX),
                y: Math.min(Math.max(EDGE, y), maxY)
            };
        }

        // The shipped CSS pins the container with right/bottom + !important,
        // so switch to left/top with inline !important declarations.
        function applyPosition(x, y) {
            floatContainer.style.setProperty("right", "auto", "important");
            floatContainer.style.setProperty("bottom", "auto", "important");
            floatContainer.style.setProperty("left", Math.round(x) + "px", "important");
            floatContainer.style.setProperty("top", Math.round(y) + "px", "important");
        }

        function rect() {
            return floatContainer.getBoundingClientRect();
        }

        function savePosition(r) {
            try {
                if (storage) {
                    storage.setItem(POS_KEY, JSON.stringify({
                        x: Math.round(r.left), y: Math.round(r.top),
                        w: Math.round(r.width), h: Math.round(r.height)
                    }));
                }
            } catch (e) {}
        }

        // Restore the last dragged position, clamped to the current screen.
        var drag = null;
        var saved = readSaved();
        if (saved) {
            var p = clamp(saved.x, saved.y, saved.w || 440, saved.h || 120);
            applyPosition(p.x, p.y);
        }

        function keepInView() {
            if (drag) return; // never fight an active drag
            var r = rect();
            if (!r.width || !r.height) return; // hidden (fullscreen / not active)
            var fit = clamp(r.left, r.top, r.width, r.height);
            if (Math.abs(fit.x - r.left) > 1 || Math.abs(fit.y - r.top) > 1) {
                applyPosition(fit.x, fit.y);
            }
        }

        window.addEventListener("resize", keepInView);
        // Also handles switching between the 440px modal and the small pill.
        try {
            if (typeof ResizeObserver !== "undefined") {
                new ResizeObserver(keepInView).observe(floatContainer);
            }
        } catch (e) {}

        function onPointerDown(e) {
            if (e.button !== undefined && e.button !== 0) return;
            // Let links and the minimize/close buttons work normally.
            if (e.target && e.target.closest && e.target.closest("a, button, input, select, textarea")) return;
            var handle = e.currentTarget;
            var r = rect();
            if (!r.width || !r.height) return;
            var fit = clamp(r.left, r.top, r.width, r.height);
            if (fit.x !== r.left || fit.y !== r.top) applyPosition(fit.x, fit.y);
            drag = {
                id: e.pointerId,
                handle: handle,
                sx: e.clientX,
                sy: e.clientY,
                ox: fit.x,
                oy: fit.y
            };
            handle.classList.add("aio-dragging");
            floatContainer.classList.add("aio-dragging");
            e.preventDefault();
            try { handle.setPointerCapture(e.pointerId); } catch (err) {}
        }

        function onPointerMove(e) {
            if (!drag || e.pointerId !== drag.id) return;
            var r = rect();
            var p = clamp(
                drag.ox + (e.clientX - drag.sx),
                drag.oy + (e.clientY - drag.sy),
                r.width, r.height
            );
            applyPosition(p.x, p.y);
        }

        function onPointerUp(e) {
            if (!drag || e.pointerId !== drag.id) return;
            drag.handle.classList.remove("aio-dragging");
            floatContainer.classList.remove("aio-dragging");
            try {
                if (drag.handle.hasPointerCapture && drag.handle.hasPointerCapture(e.pointerId)) {
                    drag.handle.releasePointerCapture(e.pointerId);
                }
            } catch (err) {}
            savePosition(rect());
            drag = null;
        }

        [floatContainer.querySelector(".snapwc-header"), minPill].forEach(function (handle) {
            if (!handle) return;
            var oldTitle = handle.getAttribute("title") || "";
            handle.setAttribute("title", (oldTitle ? oldTitle + " · " : "") + "Drag to move panel");
            handle.addEventListener("pointerdown", onPointerDown);
            handle.addEventListener("pointermove", onPointerMove);
            handle.addEventListener("pointerup", onPointerUp);
            handle.addEventListener("pointercancel", onPointerUp);
            handle.addEventListener("lostpointercapture", onPointerUp);
        });
    })();

    // ------------------------------------------------------------
    // 2.5 NATIVE DIRECT-LINK ENGINE (Facebook / Instagram / X / TikTok)
    //     Extracts the real CDN url straight from the page, zero 3rd-party API.
    // ------------------------------------------------------------
    var nativeSourceVideo = null;
    // Best title we could recover from the page's own metadata (tweet text, TikTok caption...)
    var nativeTitleHint = "";

    function isNativePlatform() {
        return platform === "facebook" || platform === "instagram" || platform === "twitter" || platform === "tiktok";
    }

    function normalizeMediaUrl(raw) {
        if (!raw) return "";
        var u = String(raw);
        u = u.replace(/\\u002F/gi, "/")
             .replace(/\\u0026/gi, "&")
             .replace(/\\u003D/gi, "=")
             .replace(/\\u003F/gi, "?")
             .replace(/\\u0025/gi, "%")
             .replace(/\\u003A/gi, ":")
             .replace(/\\\//g, "/")
             .replace(/&amp;/g, "&");
        if (!/^https?:\/\//i.test(u)) return "";
        return u;
    }

    // Static assets that live next to real videos but are never the video itself
    // (TikTok ships promo clips such as /obj/eden-va2/.../apk_new_8.mp4 in the same JSON)
    var JUNK_MEDIA_RE = /\/obj\/eden-|\/obj\/ies-|apk_new|avatar|profile_image|-thumbnail|thumbnail\.|favicon|\/img\/|sprite|logo\.|\.jpe?g|\.webp|\.png|\.gif|\.css|\.js(\?|$)|\.json(\?|$)|\.woff/i;

    function pushCandidate(list, url, score) {
        var u = normalizeMediaUrl(url);
        if (!u) return;
        if (/^blob:|^data:/i.test(u)) return;
        if (JUNK_MEDIA_RE.test(u)) return;
        list.push({ url: u, score: score || 0 });
    }

    // Score helps to prefer HD / larger renditions
    function scoreByUrl(u) {
        var s = 0;
        if (/hd|1080|720|high|_hd\.|hd_/i.test(u)) s += 40;
        if (/sd|360|low/i.test(u)) s -= 10;
        if (/\.mp4/i.test(u)) s += 15;
        if (/audio|\.m4a|\.mp3/i.test(u)) s -= 25;
        return s;
    }

    function collectFromVideoTags(list, scope) {
        var nodes = (scope || document).querySelectorAll("video");
        for (var i = 0; i < nodes.length; i++) {
            var v = nodes[i];
            var w = v.videoWidth || 0;
            var h = v.videoHeight || 0;
            var area = Math.min(w * h, 3840 * 2160) / 12000;
            var src = v.currentSrc || v.src || "";
            if (/^https?:/i.test(src)) pushCandidate(list, src, 60 + area);
            var sources = v.querySelectorAll("source");
            for (var j = 0; j < sources.length; j++) {
                if (/^https?:/i.test(sources[j].src)) pushCandidate(list, sources[j].src, 55 + area);
            }
            // Facebook / Instagram sometimes expose the progressive url on dataset
            if (v.dataset) {
                ["src", "videoUrl", "video_url", "downloadUrl"].forEach(function (k) {
                    if (v.dataset[k]) pushCandidate(list, v.dataset[k], 50 + area);
                });
            }
        }
    }

    function collectByPatterns(list, html, patterns, baseScore) {
        for (var p = 0; p < patterns.length; p++) {
            var re = patterns[p].re;
            var weight = patterns[p].weight;
            re.lastIndex = 0;
            var m;
            var guard = 0;
            while ((m = re.exec(html)) !== null && guard < 20) {
                guard++;
                pushCandidate(list, m[1], baseScore + weight + scoreByUrl(m[1]));
            }
        }
    }

    var FB_PATTERNS = [
        { re: /"playable_url_quality_hd"\s*:\s*"([^"]+)"/g, weight: 50 },
        { re: /"browser_native_hd_url"\s*:\s*"([^"]+)"/g, weight: 48 },
        { re: /"playable_url"\s*:\s*"([^"]+)"/g, weight: 35 },
        { re: /"browser_native_sd_url"\s*:\s*"([^"]+)"/g, weight: 30 },
        { re: /hd_src\s*:\s*"([^"]+)"/g, weight: 45 },
        { re: /sd_src\s*:\s*"([^"]+)"/g, weight: 25 },
        { re: /"progressive_url"\s*:\s*"([^"]+)"/g, weight: 40 }
    ];

    var IG_PATTERNS = [
        { re: /"video_versions"\s*:\s*\[\s*\{[^}]*?"url"\s*:\s*"([^"]+)"/g, weight: 55 },
        { re: /"video_url"\s*:\s*"([^"]+)"/g, weight: 50 },
        { re: /"url"\s*:\s*"(https?:\\?\/\\?\/[^"]*?\.mp4[^"]*)"/g, weight: 35 },
        { re: /"src"\s*:\s*"(https?:\\?\/\\?\/[^"]*?\.mp4[^"]*)"/g, weight: 30 }
    ];

    var TW_PATTERNS = [
        { re: /"playbackUrl"\s*:\s*"([^"]+)"/g, weight: 45 },
        { re: /https?:\/\/video\.twimg\.com\/[^"'\s\\]+?\.mp4[^"'\s\\]*/g, weight: 40 }
    ];

    // og:video / twitter:player:stream are the highest-quality single-file mp4 in most SPA pages
    function collectMetaVideo(list) {
        var props = [
            "og:video:secure_url", "og:video:url", "og:video",
            "twitter:player:stream"
        ];
        for (var i = 0; i < props.length; i++) {
            var el = document.querySelector('meta[property="' + props[i] + '"], meta[name="' + props[i] + '"]');
            if (el && el.content) pushCandidate(list, el.content, 85);
        }
    }

    // MSE players never expose their source in the DOM, but every segment they pull
    // shows up in the Resource Timing buffer - the last resort for blob:-only players
    function collectByResourceTiming(list, hostRe) {
        try {
            if (!performance || !performance.getEntriesByType) return;
            var entries = performance.getEntriesByType("resource") || [];
            var seen = {};
            for (var i = 0; i < entries.length; i++) {
                var name = entries[i] && entries[i].name;
                if (!name || !/^https?:/.test(name)) continue;
                if (hostRe && !hostRe.test(name)) continue;
                if (/\.(?:m3u8|m4s|ts)(\?|$)/i.test(name)) continue;
                if (!/\.(?:mp4|webm|mov|m4v)(\?|$)/i.test(name)) continue;  // media files only
                if (seen[name]) continue;
                seen[name] = 1;
                pushCandidate(list, name, 70 + scoreByUrl(name));
            }
        } catch (e) { /* Resource Timing unavailable */ }
    }

    function pickBestCandidate(list, wantAudio) {
        if (!list.length) return null;
        var pool = list.filter(function (c) { return !/\.m3u8(\?|$)/i.test(c.url); });
        if (!pool.length) pool = list;
        if (wantAudio) {
            var audioOnly = pool.filter(function (c) { return /audio|\.m4a|\.mp3|\.ogg/i.test(c.url); });
            if (audioOnly.length) pool = audioOnly;
        }
        pool.sort(function (a, b) { return b.score - a.score; });
        return pool[0];
    }

    async function fetchPageHtml(url) {
        var res = await fetch(url, {
            credentials: "include",
            headers: { "Accept": "text/html,application/xhtml+xml" },
            redirect: "follow"
        });
        if (!res.ok) throw new Error("HTTP " + res.status);
        return await res.text();
    }

    async function extractFacebookDirect(targetUrl, wantAudio) {
        // 1) the <video> the user is actually watching wins - it cannot be the wrong post
        if (!wantAudio && nativeSourceVideo && document.contains(nativeSourceVideo)) {
            var live = normalizeMediaUrl(nativeSourceVideo.currentSrc || nativeSourceVideo.src || "");
            if (live && (nativeSourceVideo.videoWidth || 0) >= 480) {
                return { url: live, score: 999 };
            }
        }

        var list = [];
        if (nativeSourceVideo && document.contains(nativeSourceVideo)) {
            collectFromVideoTags(list, nativeSourceVideo.parentElement || document);
        }
        if (!list.length) collectFromVideoTags(list, document);
        collectMetaVideo(list);
        collectByPatterns(list, document.documentElement.innerHTML, FB_PATTERNS, 20);

        var vid = (targetUrl.match(/[?&]v=(\d+)/) || targetUrl.match(/\/(?:reel|reels|videos)\/(\d+)/) || [])[1];
        if (!list.length && vid) {
            var tries = [
                "https://www.facebook.com/video/embed?video_id=" + vid,
                "https://m.facebook.com/video/embed?video_id=" + vid
            ];
            for (var i = 0; i < tries.length && !list.length; i++) {
                try {
                    var html = await fetchPageHtml(tries[i]);
                    collectByPatterns(list, html, FB_PATTERNS, 30);
                } catch (e) {}
            }
        }
        return pickBestCandidate(list, wantAudio);
    }

    async function extractInstagramDirect(targetUrl, wantAudio) {
        // 1) the first video_versions block on the page belongs to the opened post
        if (!wantAudio) {
            var primary = document.documentElement.innerHTML.match(/"video_versions"\s*:\s*\[\s*\{[^}]*?"url"\s*:\s*"([^"]+)"/);
            if (primary) {
                var direct = normalizeMediaUrl(primary[1]);
                if (direct) return { url: direct, score: 999 };
            }
        }

        var list = [];
        if (nativeSourceVideo && document.contains(nativeSourceVideo)) {
            collectFromVideoTags(list, nativeSourceVideo.closest("article") || document);
        }
        if (!list.length) collectFromVideoTags(list, document);
        collectMetaVideo(list);
        collectByPatterns(list, document.documentElement.innerHTML, IG_PATTERNS, 20);

        if (!list.length) {
            var m = targetUrl.match(/\/(p|reel|reels|tv)\/([A-Za-z0-9_-]+)/);
            if (m) {
                var kind = m[1] === "reels" ? "reel" : m[1];
                var tries = [
                    "https://www.instagram.com/" + kind + "/" + m[2] + "/embed/captioned/",
                    "https://www.instagram.com/" + kind + "/" + m[2] + "/embed/"
                ];
                for (var i = 0; i < tries.length && !list.length; i++) {
                    try {
                        var html = await fetchPageHtml(tries[i]);
                        collectByPatterns(list, html, IG_PATTERNS, 30);
                    } catch (e) {}
                }
            }
        }
        return pickBestCandidate(list, wantAudio);
    }

    // The quality row the user clicked, so a multi-rendition source can honour it
    var preferredHeight = 0;
    function setPreferredQuality(fmt) {
        var map = { "4k": 2160, "1440": 1440, "1080": 1080, "720": 720, "480": 480, "360": 360 };
        preferredHeight = (fmt && map[fmt.id]) || 0;
    }

    function twitterStatusId(targetUrl) {
        var s = String(targetUrl || (location && location.href) || "");
        var m = s.match(/\/status(?:es)?\/(\d{6,25})/);
        return m ? m[1] : null;
    }

    // x.com only ships HLS (separate audio/video tracks) to the player, so the DOM
    // never contains a downloadable file. The official embed backend still exposes
    // the progressive muxed renditions (video + audio, up to 4K) for any public post.
    async function fetchTwitterVariants(tweetId) {
        if (!tweetId) return [];
        var attempts = [
            "https://cdn.syndication.twimg.com/tweet-result?id=" + tweetId + "&lang=en&token=x",
            "https://cdn.syndication.twimg.com/tweet-result?id=" + tweetId + "&lang=en"
        ];
        for (var i = 0; i < attempts.length; i++) {
            try {
                var data = await gmRequest({ method: "GET", url: attempts[i], timeout: 12000 });
                if (!data || typeof data !== "object") continue;
                if (data.text && !nativeTitleHint) nativeTitleHint = String(data.text).slice(0, 80);
                var variants = (data.video && data.video.variants) || [];
                if (!variants.length) continue;
                var out = [];
                for (var v = 0; v < variants.length; v++) {
                    var src = variants[v].src || "";
                    if (!/^https?:/.test(src)) continue;
                    if (/\.m3u8(\?|$)/i.test(src)) continue;   // playlists need muxing, skip
                    var dim = src.match(/\/(\d{2,4})x(\d{2,4})\//);
                    var h = parseInt((dim && dim[2]) || "0", 10);
                    out.push({ url: src, score: 100 + (isNaN(h) ? 0 : h) / 10, height: isNaN(h) ? 0 : h });
                }
                // honour the quality row the user actually clicked
                if (preferredHeight && out.length) {
                    var exact = out.filter(function (v) { return v.height === preferredHeight; });
                    if (!exact.length) {
                        var lower = out.filter(function (v) { return v.height && v.height <= preferredHeight; })
                                       .sort(function (a, b) { return b.height - a.height; });
                        exact = lower.length ? [lower[0]] : out.slice(-1);
                    }
                    out = exact;
                }
                if (out.length) return out;
            } catch (e) {
                console.warn("[AIO] syndication attempt failed:", e && e.message);
            }
        }
        return [];
    }

    async function extractTwitterDirect(targetUrl, wantAudio) {
        var list = [];
        // 1) official embed backend -> progressive mp4 with audio (highest priority)
        var variants = await fetchTwitterVariants(twitterStatusId(targetUrl));
        for (var i = 0; i < variants.length; i++) pushCandidate(list, variants[i].url, variants[i].score);
        if (list.length) return pickBestCandidate(list, wantAudio);

        // 2) og:video / twitter:player:stream meta
        collectMetaVideo(list);
        // 3) the player element (often blob:, but sometimes a direct twimg url)
        collectFromVideoTags(list, document);
        // 4) inlined JSON variants / playbackUrl / resource timings
        collectByPatterns(list, document.documentElement.innerHTML, TW_PATTERNS, 20);
        collectByResourceTiming(list, /video\.twimg\.com\/(?:ext_tw_video|amplify_video|tweet_video)\//);
        return pickBestCandidate(list, wantAudio);
    }

    async function extractTikTokDirect(targetUrl, wantAudio) {
        var list = [];
        collectMetaVideo(list);
        collectFromVideoTags(list, document);

        // TikTok embeds the playable urls inside its hydration JSON
        var scopes = document.querySelectorAll(
            'script[id="__UNIVERSAL_DATA_FOR_REHYDRATION__"], script[id="SIGI_STATE"], script[id="__NEXT_DATA__"]'
        );
        for (var i = 0; i < scopes.length; i++) {
            var raw = scopes[i].textContent || "";
            if (!raw) continue;

            // playAddr / play_addr are the cleanest source, downloadAddr is the fallback
            var keys = ["playAddr", "play_addr", "downloadAddr", "download_addr"];
            for (var k = 0; k < keys.length; k++) {
                var m = raw.match(new RegExp('"' + keys[k] + '"\\s*:\\s*"([^"]+)"'));
                if (m) pushCandidate(list, m[1], 95 - k * 3);
            }

            // the caption sits just before the video object in itemStruct
            if (!nativeTitleHint) {
                var at = raw.search(/"playAddr"\s*:/);
                if (at > 0) {
                    var head = raw.slice(Math.max(0, at - 6000), at);
                    var descs = head.match(/"desc"\s*:\s*"((?:[^"\\]|\\.)*)"/g);
                    if (descs && descs.length) {
                        var rawDesc = descs[descs.length - 1].replace(/^"desc"\s*:\s*"/, "").replace(/"$/, "");
                        try { rawDesc = JSON.parse('"' + rawDesc + '"'); } catch (e) {}
                        if (rawDesc) nativeTitleHint = String(rawDesc).slice(0, 80);
                    }
                }
            }

            // every .mp4 url in the blob - low weight, only real video CDN hosts
            var re = /https?:[^"'\s]*?\.mp4[^"'\s]*/g;
            var mm;
            var guard = 0;
            while ((mm = re.exec(raw)) !== null && guard < 15) {
                guard++;
                if (!/tiktokcdn|tiktok\.com\/video|akamaized\.net/i.test(mm[0])) continue;
                pushCandidate(list, mm[0], 30 + scoreByUrl(mm[0]));
            }

            // urlList inside play_addr / bitrateInfo
            var urls = raw.match(/https?:\\?\/\\?\/[^"'\s]*?(?:video|tiktokcdn)[^"'\s]*/g) || [];
            for (var u = 0; u < Math.min(urls.length, 12); u++) {
                pushCandidate(list, urls[u], 20);
            }
        }
        // MSE players only: whatever the player itself actually requested
        collectByResourceTiming(list, /(?:tiktokcdn|tiktok\.com\/video|akamaized\.net)/);
        return pickBestCandidate(list, wantAudio);
    }

    async function extractNativeDirect(targetUrl, wantAudio) {
        if (platform === "facebook") return await extractFacebookDirect(targetUrl, wantAudio);
        if (platform === "instagram") return await extractInstagramDirect(targetUrl, wantAudio);
        if (platform === "twitter") return await extractTwitterDirect(targetUrl, wantAudio);
        if (platform === "tiktok") return await extractTikTokDirect(targetUrl, wantAudio);

        var list = [];
        collectMetaVideo(list);
        collectFromVideoTags(list, document);
        return pickBestCandidate(list, wantAudio);
    }

    // Titles scraped from social feeds are noisy: "😂😂 on TikTok: caption",
    // zero-width marks, emoji-only strings... normalise them into a safe filename
    function cleanTitleText(raw) {
        return String(raw || "")
            .replace(/[\u200B-\u200F\u202A-\u202E\uFEFF\uFFFD]/g, "")
            .replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "")          // emoji (astral plane)
            .replace(/[\u2600-\u27BF\u2B00-\u2BFF\uFE0F]/g, "")      // symbols / variation selectors
            .replace(/^.+?\bon (Instagram|Facebook|TikTok|YouTube|X)\s*[:：]\s*/i, "")
            .replace(/\s*[|•\-–]\s*(Facebook|Instagram|Watch|Reels?|TikTok|YouTube|X)\s*$/i, "")
            .replace(/\s+on\s+(TikTok|Instagram|Facebook|YouTube|X)\s*$/i, "")
            .replace(/^\(\d+\)\s*/, "")
            .replace(/[\u201C\u201D\u2018\u2019"]/g, "")
            .replace(/\s+/g, " ")
            .trim();
    }

    function buildFileName(candidateUrl, fmt) {
        var candidates = [];
        if (nativeTitleHint) candidates.push(nativeTitleHint);
        if (currentVideoTitle) candidates.push(currentVideoTitle);

        var og = document.querySelector('meta[property="og:title"]');
        if (og && og.content) candidates.push(og.content);
        var tw = document.querySelector('meta[name="twitter:title"]');
        if (tw && tw.content) candidates.push(tw.content);
        if (document.title) candidates.push(document.title);

        var generic = /^(facebook|instagram|watch|reels?|video|tiktok|twitter|x|youtube|log ?in|sign ?in|\(\d+\)\s*facebook)$/i;
        var title = "";
        for (var i = 0; i < candidates.length; i++) {
            var c = cleanTitleText(candidates[i]);
            if (c.length >= 3 && !generic.test(c) && /[\w\u4e00-\u9fa5]/.test(c)) { title = c; break; }
        }

        if (!title) {
            var src = currentTargetUrl || location.href;
            var m = src.match(/\/(?:reel|reels|p|tv|videos?|video)\/([A-Za-z0-9_-]+)/) ||
                    src.match(/[?&]v=(\d+)/) ||
                    src.match(/\/status\/(\d+)/);
            title = (platform || "video") + "_" + (m ? m[1] : String(Date.now()).slice(-8));
        }

        var base = title.replace(/[\\/:*?"<>|]+/g, "_").replace(/\s+/g, " ").trim().slice(0, 70).trim() || "video";
        var ext = "mp4";
        if (fmt && fmt.type === "audio") {
            if (/flac/i.test(candidateUrl)) ext = "flac";
            else if (/\.m4a/i.test(candidateUrl)) ext = "m4a";
            else ext = "mp3";
        }
        return base + "_" + (fmt ? fmt.id : "hd") + "." + ext;
    }

    function gmDownloadFile(url, fileName, onProgress) {
        return new Promise(function (resolve, reject) {
            if (typeof GM_download !== "function") {
                reject(new Error("GM_download not available"));
                return;
            }
            var finished = false;
            var task = null;
            var lastTick = Date.now();

            var watchdog = setInterval(function () {
                if (!finished && Date.now() - lastTick > 12000) {
                    finished = true;
                    clearInterval(watchdog);
                    try { if (task && task.abort) task.abort(); } catch (e) {}
                    reject(new Error("GM_download stalled"));
                }
            }, 5000);

            function done(fn, arg) {
                if (finished) return;
                finished = true;
                clearInterval(watchdog);
                fn(arg);
            }

            try {
                task = GM_download({
                    url: url,
                    name: fileName,
                    saveAs: false,
                    headers: { "Referer": location.origin + "/" },
                    onprogress: function (p) {
                        lastTick = Date.now();
                        if (onProgress && p && typeof p.loaded === "number") onProgress(p);
                    },
                    onload: function () { done(resolve, true); },
                    onerror: function (err) {
                        done(reject, new Error((err && (err.error || err.message)) || "GM_download failed"));
                    },
                    ontimeout: function () { done(reject, new Error("GM_download timeout")); }
                });
            } catch (e) {
                done(reject, e);
            }
        });
    }

    function blobDownloadViaGM(url, fileName, onProgress) {
        return new Promise(function (resolve, reject) {
            GM_xmlhttpRequest({
                method: "GET",
                url: url,
                responseType: "blob",
                headers: { "Referer": location.origin + "/" },
                timeout: 600000,
                onprogress: function (p) {
                    if (onProgress && p && p.lengthComputable) {
                        onProgress({ loaded: p.loaded, total: p.total });
                    }
                },
                onload: function (res) {
                    if (res.status < 200 || res.status >= 300) {
                        reject(new Error("HTTP " + res.status));
                        return;
                    }
                    var blob = res.response;
                    if (!blob || !blob.size) {
                        reject(new Error("Empty response body"));
                        return;
                    }
                    var objUrl = URL.createObjectURL(blob);
                    var a = document.createElement("a");
                    a.href = objUrl;
                    a.download = fileName;
                    a.style.display = "none";
                    document.body.appendChild(a);
                    a.click();
                    setTimeout(function () {
                        try { URL.revokeObjectURL(objUrl); } catch (e) {}
                        if (a.parentNode) a.parentNode.removeChild(a);
                    }, 45000);
                    resolve(true);
                },
                onerror: function () { reject(new Error("Network error while downloading")); },
                ontimeout: function () { reject(new Error("Download timed out")); }
            });
        });
    }

    async function downloadNativeUrl(url, fileName, onProgress) {
        // Route 1: browser-level download (fast, no memory cost)
        try {
            return await gmDownloadFile(url, fileName, onProgress);
        } catch (e) {
            console.warn("[AIO] GM_download failed:", e && e.message);
        }
        // Route 2: fetch the file as a Blob and save it
        try {
            return await blobDownloadViaGM(url, fileName, onProgress);
        } catch (e2) {
            console.warn("[AIO] Blob download failed:", e2 && e2.message);
        }
        // Route 3: last resort, open the CDN url in a new tab
        var win = window.open(url, "_blank");
        if (!win) throw new Error("Download was blocked by the browser. Please allow pop-ups for this site and retry.");
        return "opened";
    }

    function renderNativeSuccess(container, url, fileName) {
        setSafeHTML(container, `
            <button class="snapwc-btn-copy" data-url="${url}" title="Copy direct link">📋 Copy</button>
            <a href="${url}" target="_blank" download="${fileName}" class="snapwc-btn-dl ready" title="Click to download again">🎉 Download Again</a>
        `);
        var copyBtn = container.querySelector(".snapwc-btn-copy");
        if (copyBtn) {
            copyBtn.addEventListener("click", function () {
                var u = copyBtn.getAttribute("data-url");
                try {
                    navigator.clipboard.writeText(u).then(function () {
                        copyBtn.textContent = "✅ Copied";
                        setTimeout(function () { copyBtn.textContent = "📋 Copy"; }, 1600);
                    });
                } catch (e) {
                    window.prompt("Copy this link:", u);
                }
            });
        }
    }

    function renderFailedState(container, targetUrl, fmt, reason, extraHint) {
        setSafeHTML(container, `
            <span style="font-size: 11px; color: #f87171;" title="${reason || 'Unavailable'}">Failed</span>
            <button class="snapwc-btn-dl" data-fmt="${fmt.id}">🔄 Retry</button>
        `);
        var retry = container.querySelector("button.snapwc-btn-dl");
        if (retry) {
            retry.addEventListener("click", function () {
                triggerLoaderDownload(targetUrl, fmt);
            });
        }
        updateMinPillText("⚠️ " + (fmt.label || fmt.id) + ": " + (extraHint || "unavailable"));
    }

    // Direct-link route: works without any 3rd-party server.
    async function tryNativeRoute(targetUrl, fmt, actionContainer, txtEl, fillEl) {
        if (fmt.type === "audio") return false;
        if (!isNativePlatform()) return false;
        try {
            if (txtEl) txtEl.textContent = "Extracting direct video link...";
            if (fillEl) fillEl.style.width = "25%";
            updateMinPillText(`🔍 ${fmt.label}: locating direct link`);

            setPreferredQuality(fmt);
            var direct = await extractNativeDirect(targetUrl, false);
            if (!direct || !direct.url) return false;

            var fileName = buildFileName(direct.url, fmt);
            if (txtEl) txtEl.textContent = "Direct link found. Downloading...";
            if (fillEl) fillEl.style.width = "40%";

            await downloadNativeUrl(direct.url, fileName, function (p) {
                var loaded = p.loaded || 0;
                var total = p.total || 0;
                var pct = total ? Math.min(100, (loaded / total) * 100) : 0;
                if (fillEl) fillEl.style.width = (40 + pct * 0.6).toFixed(1) + "%";
                var mb = (loaded / 1048576).toFixed(1);
                var mbTotal = total ? (total / 1048576).toFixed(1) : "?";
                if (txtEl) txtEl.textContent = `Downloading ${mb}MB / ${mbTotal}MB (${pct.toFixed(0)}%)`;
                updateMinPillText(`⬇️ ${fmt.label}: ${pct.toFixed(0)}%`);
            });

            loaderActiveTasks[fmt.id] = { downloadUrl: direct.url };
            if (fillEl) fillEl.style.width = "100%";
            if (txtEl) txtEl.textContent = "Saved.";
            updateMinPillText(`✅ ${fmt.label} saved`);
            renderNativeSuccess(actionContainer, direct.url, fileName);
            return true;
        } catch (e) {
            console.warn("[AIO] Native direct route failed:", e && e.message);
            return false;
        }
    }

    function preferNativeFirst() {
        return platform === "facebook" || platform === "instagram" ||
               platform === "twitter" || platform === "tiktok";
    }

    // ------------------------------------------------------------
    // 3. ENGINE 1: LOADER.TO PURE HTTP REST API ENGINE
    // ------------------------------------------------------------
    var loaderActiveTasks = {}; // format -> { taskId, downloadUrl, status, progress, text }

    function gmRequest(opts) {
        return new Promise(function (resolve, reject) {
            GM_xmlhttpRequest(Object.assign({}, opts, {
                onload: function (res) {
                    if (res.status >= 200 && res.status < 300) {
                        try {
                            var json = JSON.parse(res.responseText);
                            resolve(json);
                        } catch (e) {
                            resolve(res.responseText);
                        }
                    } else {
                        reject(new Error("HTTP " + res.status + ": " + res.responseText));
                    }
                },
                onerror: function (err) {
                    reject(new Error("Network request failed. Please check your network connection or proxy."));
                },
                ontimeout: function () {
                    reject(new Error("Request timed out."));
                }
            }));
        });
    }

    // Call Loader.to API to create a download/transcoding task
    async function loaderCreateTask(targetUrl, formatVal) {
        var encUrl = encodeURIComponent(targetUrl);
        var lastErr = null;

        for (var i = 0; i < LOADER_API_KEYS.length; i++) {
            var apiKey = LOADER_API_KEYS[i];
            var dlApi = `https://p.savenow.to/api/v2/download?format=${formatVal}&url=${encUrl}&apikey=${apiKey}`;
            try {
                var res = await gmRequest({
                    method: "GET",
                    url: dlApi,
                    headers: {
                        "Origin": "https://en.loader.to",
                        "Referer": "https://en.loader.to/1/",
                        "Accept": "application/json, text/plain, */*"
                    },
                    timeout: 25000
                });
                if (res && (res.id || res.download_url)) {
                    return res;
                }
            } catch (e) {
                lastErr = e;
            }
        }
        throw (lastErr || new Error("Failed to create transcoding task from Server 1"));
    }

    // Poll task progress
    async function loaderPollProgress(taskId) {
        var progUrl = `https://p.savenow.to/api/progress?id=${taskId}&_=${Date.now()}`;
        return await gmRequest({
            method: "GET",
            url: progUrl,
            headers: {
                "Origin": "https://en.loader.to",
                "Referer": "https://en.loader.to/1/",
                "Accept": "application/json, text/plain, */*"
            },
            timeout: 15000
        });
    }

    // Formats supported by Loader.to
    var LOADER_FORMATS = [
        { id: "4k", label: "4K 2160p", desc: "MP4 · Ultra HD 2160p", badge: "ultra", type: "video" },
        { id: "1440", label: "2K 1440p", desc: "MP4 · Quad HD 1440p", badge: "ultra", type: "video" },
        { id: "1080", label: "1080p FHD", desc: "MP4 · Full HD 1080p", badge: "green", type: "video" },
        { id: "720", label: "720p HD", desc: "MP4 · Standard HD", badge: "green", type: "video" },
        { id: "480", label: "480p SD", desc: "MP4 · Standard Definition", badge: "blue", type: "video" },
        { id: "360", label: "360p", desc: "MP4 · Low Bitrate", badge: "blue", type: "video" },
        { id: "mp3", label: "MP3 320k", desc: "Audio · Hi-Fi 320kbps", badge: "orange", type: "audio" },
        { id: "m4a", label: "M4A AAC", desc: "Audio · AAC Mobile / Apple", badge: "orange", type: "audio" },
        { id: "flac", label: "FLAC", desc: "Audio · Lossless Hi-Fi", badge: "orange", type: "audio" },
        { id: "wav", label: "WAV", desc: "Audio · Uncompressed Master", badge: "orange", type: "audio" }
    ];

    function renderLoaderEngineView(targetUrl) {
        var videoTitle = currentVideoTitle || document.title.replace(/ - YouTube$/, "") || "Online Video";
        var videoCover = currentVideoThumb || "";

        // If on YouTube and no thumbnail yet, extract standard thumbnail
        if (!videoCover && platform === "youtube") {
            var vidMatch = targetUrl.match(/(?:v=|\/shorts\/|\/embed\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
            if (vidMatch) {
                videoCover = `https://i.ytimg.com/vi/${vidMatch[1]}/hqdefault.jpg`;
            }
        }

        var html = `
            <div class="snapwc-video-info">
                ${videoCover ? `<img class="snapwc-thumb" src="${videoCover}" referrerpolicy="no-referrer" alt="Thumbnail" />` : ''}
                <div class="snapwc-meta">
                    <div class="snapwc-platform-tag">
                        <span>${preferNativeFirst() ? "⚡" : "🚀"}</span>
                        <span>${preferNativeFirst() ? "Direct CDN Link · Highest Quality · Instant" : "Server 1: High-Speed Transcoder (Ultra HD)"}</span>
                    </div>
                    <div class="snapwc-title" title="${videoTitle}">${videoTitle}</div>
                    ${videoCover ? `<div style="margin-top: 4px;"><a href="${videoCover}" target="_blank" download class="snapwc-btn-copy" style="font-size: 11px; padding: 2px 7px; text-decoration: none;">🖼️ Thumbnail</a></div>` : ''}
                </div>
            </div>

            <div>
                <div class="snapwc-section-title">🎬 Video Formats & Quality</div>
                <div class="snapwc-list" id="loader-video-list"></div>
            </div>

            <div>
                <div class="snapwc-section-title">🎵 Audio Extraction</div>
                <div class="snapwc-list" id="loader-audio-list"></div>
            </div>
        `;

        setSafeHTML(modalBody, html);

        var videoListEl = document.getElementById("loader-video-list");
        var audioListEl = document.getElementById("loader-audio-list");

        LOADER_FORMATS.forEach(function (fmt) {
            var item = document.createElement("div");
            item.className = "snapwc-item";
            item.id = "loader-row-" + fmt.id;

            setSafeHTML(item, `
                <div class="snapwc-item-info">
                    <span class="snapwc-badge ${fmt.badge}">${fmt.label}</span>
                    <span style="font-size: 12.5px; color: #cbd5e1;">${fmt.desc}</span>
                </div>
                <div class="snapwc-actions" id="loader-action-${fmt.id}">
                    <button class="snapwc-btn-dl" data-fmt="${fmt.id}">⬇ Download</button>
                </div>
            `);

            if (fmt.type === "video") {
                videoListEl.appendChild(item);
            } else {
                audioListEl.appendChild(item);
            }

            var dlBtn = item.querySelector("button.snapwc-btn-dl");
            dlBtn.addEventListener("click", function () {
                triggerLoaderDownload(targetUrl, fmt);
            });
        });
    }

    async function triggerLoaderDownload(targetUrl, fmt) {
        var actionContainer = document.getElementById("loader-action-" + fmt.id);
        if (!actionContainer) return;

        // Check if task already finished
        var existing = loaderActiveTasks[fmt.id];
        if (existing && existing.downloadUrl) {
            window.open(existing.downloadUrl, "_blank");
            return;
        }

        function resetProgressUI(message, width) {
            setSafeHTML(actionContainer, `
                <div class="loader-progress-wrap">
                    <div class="loader-progress-text" id="loader-txt-${fmt.id}">${message || "Creating task..."}</div>
                    <div class="loader-progress-bar">
                        <div class="loader-progress-fill" id="loader-fill-${fmt.id}" style="width: ${width || 15}%;"></div>
                    </div>
                </div>
                <button class="snapwc-btn-dl processing" disabled>⏳ Processing</button>
            `);
            return {
                txt: document.getElementById("loader-txt-" + fmt.id),
                fill: document.getElementById("loader-fill-" + fmt.id)
            };
        }

        var ui = resetProgressUI("Creating task...", 15);
        var txtEl = ui.txt;
        var fillEl = ui.fill;

        // ---- STEP 0: Facebook / Instagram use the native CDN url first ----
        if (preferNativeFirst()) {
            var nativeOk = await tryNativeRoute(targetUrl, fmt, actionContainer, txtEl, fillEl);
            if (nativeOk) return;
            ui = resetProgressUI("Switching to high-speed server...", 15);
            txtEl = ui.txt;
            fillEl = ui.fill;
        }

        try {
            // Step 1: Create Task
            var taskData = await loaderCreateTask(targetUrl, fmt.id);
            if (taskData.info && taskData.info.title && !currentVideoTitle) {
                currentVideoTitle = taskData.info.title;
            }
            if (taskData.info && taskData.info.image && !currentVideoThumb) {
                currentVideoThumb = taskData.info.image;
            }

            // Direct download URL returned immediately
            if (taskData.download_url) {
                onLoaderTaskCompleted(fmt, taskData.download_url, actionContainer);
                window.open(taskData.download_url, "_blank");
                return;
            }

            var taskId = taskData.id;
            if (!taskId) {
                throw new Error("API did not return a valid task ID");
            }

            if (txtEl) txtEl.textContent = "Transcoding: 10%";
            if (fillEl) fillEl.style.width = "25%";

            // Step 2: Poll Progress (up to 60 polls, ~90 seconds)
            var pollCount = 0;
            var settled = false;
            var pollTimer = setInterval(async function () {
                if (settled) return;
                pollCount++;
                try {
                    var pdata = await loaderPollProgress(taskId);
                    if (settled) return;

                    if (pdata.download_url) {
                        settled = true;
                        clearInterval(pollTimer);
                        onLoaderTaskCompleted(fmt, pdata.download_url, actionContainer);
                        window.open(pdata.download_url, "_blank");
                        return;
                    }

                    // --- REAL FAILURE DETECTION (fixes the "Failed (95%)" hang) ---
                    var serverFailed = (pdata.success === 0 || pdata.success === false) &&
                        ((pdata.progress || 0) >= 1000 || /fail|error|not supported|unavailable/i.test(pdata.text || ""));

                    if (serverFailed) {
                        settled = true;
                        clearInterval(pollTimer);
                        if (txtEl) txtEl.textContent = "Server cannot process this video. Trying direct link...";
                        if (fillEl) fillEl.style.width = "60%";
                        var ok = await tryNativeRoute(targetUrl, fmt, actionContainer, txtEl, fillEl);
                        if (!ok) {
                            renderFailedState(
                                actionContainer, targetUrl, fmt,
                                (pdata && pdata.message) || (pdata && pdata.text) || "Server failed to process this video",
                                "server unavailable"
                            );
                        }
                        return;
                    }

                    var prog = Math.min(95, Math.max(15, (pdata.progress || 0) / 10));
                    var smsg = pdata.text || "Processing";
                    if (txtEl) txtEl.textContent = `${smsg} (${prog.toFixed(0)}%)`;
                    if (fillEl) fillEl.style.width = `${prog}%`;
                    updateMinPillText(`⏳ ${fmt.label}: ${prog.toFixed(0)}%`);

                    if (pollCount > 60) {
                        settled = true;
                        clearInterval(pollTimer);
                        var okTimeout = await tryNativeRoute(targetUrl, fmt, actionContainer, txtEl, fillEl);
                        if (!okTimeout) {
                            renderFailedState(actionContainer, targetUrl, fmt, "Transcoding timed out", "timed out");
                        }
                    }
                } catch (pe) {
                    // Ignore single poll network error, keep trying
                }
            }, 1800);

        } catch (err) {
            // Creation failed entirely -> last chance: native direct link
            var okFallback = await tryNativeRoute(targetUrl, fmt, actionContainer, txtEl, fillEl);
            if (!okFallback) {
                renderFailedState(actionContainer, targetUrl, fmt, (err && err.message) || "Unknown error", "request failed");
            }
        }
    }

    function updateMinPillText(text) {
        if (minText) {
            minText.textContent = text || "Video Downloader";
        }
    }

    function onLoaderTaskCompleted(fmt, downloadUrl, container) {
        loaderActiveTasks[fmt.id] = { downloadUrl: downloadUrl };
        updateMinPillText(`✅ ${fmt.label} Ready`);
        setSafeHTML(container, `
            <button class="snapwc-btn-copy" data-url="${downloadUrl}" title="Copy direct link">📋 Copy</button>
            <a href="${downloadUrl}" target="_blank" download class="snapwc-btn-dl ready" title="Click to download">🎉 Download Now</a>
        `);
        var copyBtn = container.querySelector(".snapwc-btn-copy");
        copyBtn.addEventListener("click", function () {
            navigator.clipboard.writeText(downloadUrl).then(function () {
                copyBtn.textContent = "✅ Copied";
                setTimeout(function () { copyBtn.textContent = "📋 Copy"; }, 1500);
            });
        });
    }

    // ------------------------------------------------------------
    // 4. ENGINE 2: SNAPWC CRYPTO & PARSER ENGINE (RSA+AES Encrypted)
    // ------------------------------------------------------------
    var SERVER_PUBLIC_KEY = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvDU+dR2bSews55172x4L
s/ja+Dxt9ViZcj/nY0YodYo7l4jEKtEiCNV28lpFj3CkP4HKRCjL/jYkQNKGPwVg
gUCGr/jBF1FpDLsqa0kg+dtfkm5Xm9QAyMBeG/jPdl5BEPOVh33A1UkPO/Xw6kSH
rfghOUwBMzRBtXeYuJiYs5sKrf+Wy5sv708TI6G4hAPJG/69W4NNFJi/ipBNxntG
dAoUHpEy4iYsvBgiccE7U0MBDnSHSqBBtIdMMFRHARn/tc+jXaadS0a4YmhTygiN
eAJU4QuqAE25CsvkzIYIVEmlRXVcC0afw76XcwDpKBMVR5bEPzd3tMEfA+R34L1D
fQIDAQAB
-----END PUBLIC KEY-----`;

    var clientPrivateKey = null;
    var clientPublicKey = null;

    function ensureClientKeyPair() {
        if (clientPrivateKey && clientPublicKey) return;
        var rsa = new JSEncrypt({ default_key_size: 512 });
        rsa.getKey();
        clientPrivateKey = rsa.getPrivateKey();
        clientPublicKey = rsa.getPublicKey();
    }

    function encryptRequest(data) {
        ensureClientKeyPair();
        var randomKeyStr = CryptoJS.lib.WordArray.random(16).toString();
        var aesKey = CryptoJS.SHA256(randomKeyStr);
        var iv = CryptoJS.lib.WordArray.random(16);
        var jsonStr = JSON.stringify(data);
        var encrypted = CryptoJS.AES.encrypt(jsonStr, aesKey, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        var combined = iv.concat(encrypted.ciphertext);
        var encrypted_data = CryptoJS.enc.Base64.stringify(combined);

        var serverRsa = new JSEncrypt();
        serverRsa.setPublicKey(SERVER_PUBLIC_KEY);
        var encrypted_key = serverRsa.encrypt(randomKeyStr);

        return {
            encrypted_key: encrypted_key,
            encrypted_data: encrypted_data,
            client_public_key: clientPublicKey
        };
    }

    function decryptResponse(resp) {
        var clientRsa = new JSEncrypt();
        clientRsa.setPrivateKey(clientPrivateKey);
        var randomKeyStr = clientRsa.decrypt(resp.encrypted_key);
        if (!randomKeyStr) throw new Error("Failed to decrypt AES key.");

        var aesKey = CryptoJS.SHA256(randomKeyStr);
        var parsed = CryptoJS.enc.Base64.parse(resp.encrypted_data);
        var iv = CryptoJS.lib.WordArray.create(parsed.words.slice(0, 4));
        var ciphertext = CryptoJS.lib.WordArray.create(parsed.words.slice(4));
        var decrypted = CryptoJS.AES.decrypt({ ciphertext: ciphertext }, aesKey, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        var utf8Str = decrypted.toString(CryptoJS.enc.Utf8);
        return JSON.parse(utf8Str);
    }

    var savedSessionCookie = "";

    function snapwcApiFetch(endpoint, data, skipEncryption) {
        return new Promise(function (resolve, reject) {
            var url = "https://api.snapwc.com" + endpoint;
            var bodyPayload = skipEncryption ? JSON.stringify(data) : JSON.stringify(encryptRequest(data));

            var reqHeaders = {
                "Content-Type": "application/json",
                "X-Locale": "en-US",
                "Origin": "https://snapwc.com",
                "Referer": "https://snapwc.com/"
            };
            if (savedSessionCookie) {
                reqHeaders["Cookie"] = savedSessionCookie;
            }

            GM_xmlhttpRequest({
                method: "POST",
                url: url,
                headers: reqHeaders,
                data: bodyPayload,
                withCredentials: true,
                timeout: 30000,
                onload: function (res) {
                    if (res.responseHeaders) {
                        var cookieMatch = res.responseHeaders.match(/APP_SESSION_ID=([^;\r\n]+)/i);
                        if (cookieMatch) {
                            savedSessionCookie = "APP_SESSION_ID=" + cookieMatch[1].trim();
                        }
                    }

                    if (res.status >= 200 && res.status < 300) {
                        try {
                            var json = JSON.parse(res.responseText);
                            if (skipEncryption) {
                                resolve(json);
                            } else {
                                if (json.encrypted_key && json.encrypted_data) {
                                    resolve(decryptResponse(json));
                                } else {
                                    resolve(json);
                                }
                            }
                        } catch (e) {
                            reject(new Error("Failed to parse response: " + e.message));
                        }
                    } else if (res.status === 422) {
                        reject(new Error("CAPTCHA_REQUIRED"));
                    } else {
                        reject(new Error("HTTP " + res.status + ": " + res.responseText));
                    }
                },
                onerror: function (err) {
                    reject(new Error("Network request failed. Please check your connection."));
                },
                ontimeout: function () {
                    reject(new Error("Request timed out, please retry."));
                }
            });
        });
    }

    function formatSize(bytes) {
        if (!bytes) return "";
        var mb = bytes / 1024 / 1024;
        return mb >= 1000 ? (mb / 1024).toFixed(1) + " GB" : mb.toFixed(1) + " MB";
    }

    function renderSnapwcLoading(msg) {
        setSafeHTML(modalBody, `
            <div class="snapwc-loading">
                <div class="snapwc-spinner"></div>
                <div class="snapwc-loading-text">${msg || "Parsing video streams via Server 2..."}</div>
            </div>
        `);
    }

    function renderSnapwcError(errText, retryUrl) {
        setSafeHTML(modalBody, `
            <div class="snapwc-err-box">
                <div style="font-size: 32px;">⚠️</div>
                <div>${errText}</div>
                <div style="display: flex; gap: 10px; margin-top: 6px;">
                    <button class="aio-switch-btn" id="snapwc-switch-loader">🚀 Switch to Server 1 (High-Speed)</button>
                    ${retryUrl ? '<button class="aio-switch-btn" id="snapwc-retry-btn">Retry Parse</button>' : ''}
                </div>
            </div>
        `);
        document.getElementById("snapwc-switch-loader")?.addEventListener("click", function () {
            tabLoader.click();
        });
        if (retryUrl) {
            document.getElementById("snapwc-retry-btn")?.addEventListener("click", function () {
                startSnapwcParseFlow(retryUrl);
            });
        }
    }

    function renderSnapwcCaptcha(targetUrl, captchaData) {
        setSafeHTML(modalBody, `
            <div class="snapwc-captcha-box">
                <div class="snapwc-captcha-title">🔒 Security Verification</div>
                <div class="snapwc-captcha-desc">Anti-bot protection triggered. Please enter the captcha code to continue.</div>
                <div class="snapwc-captcha-row">
                    <img class="snapwc-captcha-img" id="snapwc-cimg" src="${captchaData.captcha_image}" title="Click to refresh captcha" alt="Captcha" />
                    <input type="text" class="snapwc-captcha-input" id="snapwc-cinput" maxlength="6" autocomplete="off" placeholder="CODE" autofocus />
                </div>
                <div class="snapwc-captcha-err" id="snapwc-cerr" style="color: #f87171; font-size: 12px; min-height: 16px;"></div>
                <button class="snapwc-captcha-btn" id="snapwc-cbtn">Verify & Download</button>
            </div>
        `);

        var cimg = document.getElementById("snapwc-cimg");
        var cinput = document.getElementById("snapwc-cinput");
        var cbtn = document.getElementById("snapwc-cbtn");
        var cerr = document.getElementById("snapwc-cerr");
        var currentToken = captchaData.captcha_token;

        setTimeout(function () { cinput.focus(); }, 100);

        async function refreshCaptcha() {
            cimg.style.opacity = "0.5";
            try {
                var fresh = await snapwcApiFetch("/api.captcha/generate", {}, true);
                if (fresh.captcha_image && fresh.captcha_token) {
                    cimg.src = fresh.captcha_image;
                    currentToken = fresh.captcha_token;
                    cinput.value = "";
                    cinput.focus();
                }
            } catch (e) {
                cerr.textContent = "Failed to refresh captcha: " + e.message;
            } finally {
                cimg.style.opacity = "1";
            }
        }

        cimg.addEventListener("click", refreshCaptcha);

        async function doVerify() {
            var code = cinput.value.trim().toUpperCase();
            if (!code) {
                cerr.textContent = "Please enter the captcha code";
                cinput.focus();
                return;
            }
            cbtn.disabled = true;
            cbtn.textContent = "Verifying...";
            cerr.textContent = "";

            try {
                await snapwcApiFetch("/api.captcha/verify", {
                    captcha_token: currentToken,
                    captcha_code: code,
                    scenario: "parser",
                    data: { url: targetUrl }
                }, true);

                renderSnapwcLoading("Verification successful! Generating download links...");
                var parseData = await snapwcApiFetch("/api.parser/parse", { url: targetUrl }, false);
                renderSnapwcResults(parseData);
            } catch (err) {
                cerr.textContent = "Invalid captcha code. Please try again.";
                cbtn.disabled = false;
                cbtn.textContent = "Verify & Download";
                refreshCaptcha();
            }
        }

        cbtn.addEventListener("click", doVerify);
        cinput.addEventListener("keydown", function (e) {
            if (e.key === "Enter") doVerify();
        });
    }

    function renderSnapwcResults(data) {
        if (!data) {
            renderSnapwcError("No valid media streams found");
            return;
        }

        var title = data.title || currentVideoTitle || "Video Resource";
        var cover = data.cover || currentVideoThumb || "";
        var videos = data.videos || [];
        var muxed = data.muxed || [];
        var audios = data.audios || [];

        if (title && !currentVideoTitle) currentVideoTitle = title;
        if (cover && !currentVideoThumb) currentVideoThumb = cover;

        var allVideos = [];
        muxed.forEach(function (m) {
            allVideos.push({
                quality: m.quality_note || (m.quality ? m.quality + "p" : "HD"),
                ext: (m.ext || "MP4").toUpperCase(),
                size: formatSize(m.size),
                url: m.url,
                isMuxed: true
            });
        });
        videos.forEach(function (v) {
            allVideos.push({
                quality: v.quality_note || (v.quality ? v.quality + "p" : "Video"),
                ext: (v.ext || "MP4").toUpperCase(),
                size: formatSize(v.size),
                url: v.url,
                isMuxed: false
            });
        });

        var html = `
            <div class="snapwc-video-info">
                ${cover ? `<img class="snapwc-thumb" src="${cover}" referrerpolicy="no-referrer" alt="Thumbnail" />` : ''}
                <div class="snapwc-meta">
                    <div class="snapwc-platform-tag">
                        <span>⚡</span>
                        <span>Server 2: Direct Stream Parser</span>
                    </div>
                    <div class="snapwc-title" title="${title}">${title}</div>
                    ${cover ? `<div style="margin-top: 4px;"><a href="${cover}" target="_blank" download class="snapwc-btn-copy" style="font-size: 11px; padding: 2px 7px; text-decoration: none;">🖼️ Thumbnail</a></div>` : ''}
                </div>
            </div>
        `;

        if (allVideos.length > 0) {
            html += `
                <div>
                    <div class="snapwc-section-title">🎬 Video Streams</div>
                    <div class="snapwc-list">
            `;
            allVideos.slice(0, 10).forEach(function (v) {
                html += `
                    <div class="snapwc-item">
                        <div class="snapwc-item-info">
                            <span class="snapwc-badge ${v.isMuxed ? 'green' : 'blue'}">${v.quality}</span>
                            <span style="font-size: 13px; font-weight: 600;">${v.ext}</span>
                            ${v.size ? `<span class="snapwc-size">${v.size}</span>` : ''}
                            ${v.isMuxed ? `<span style="font-size: 10px; color: #34d399;">(with Audio)</span>` : ''}
                        </div>
                        <div class="snapwc-actions">
                            <button class="snapwc-btn-copy" data-url="${v.url}" title="Copy direct link">📋 Copy</button>
                            <a href="${v.url}" target="_blank" download rel="noreferrer noopener" class="snapwc-btn-dl">⬇ Download</a>
                        </div>
                    </div>
                `;
            });
            html += `</div></div>`;
        }

        if (audios.length > 0) {
            html += `
                <div>
                    <div class="snapwc-section-title">🎵 Audio Streams</div>
                    <div class="snapwc-list">
            `;
            audios.slice(0, 5).forEach(function (a) {
                var q = a.quality_note || (a.quality ? a.quality + "kbps" : "Audio");
                var ext = (a.ext || "MP3").toUpperCase();
                var size = formatSize(a.size);
                html += `
                    <div class="snapwc-item">
                        <div class="snapwc-item-info">
                            <span class="snapwc-badge orange">${q}</span>
                            <span style="font-size: 13px; font-weight: 600;">${ext}</span>
                            ${size ? `<span class="snapwc-size">${size}</span>` : ''}
                        </div>
                        <div class="snapwc-actions">
                            <button class="snapwc-btn-copy" data-url="${a.url}" title="Copy audio link">📋 Copy</button>
                            <a href="${a.url}" target="_blank" download rel="noreferrer noopener" class="snapwc-btn-dl">⬇ Download</a>
                        </div>
                    </div>
                `;
            });
            html += `</div></div>`;
        }

        if (allVideos.length === 0 && audios.length === 0) {
            html += `<div style="text-align: center; color: #94a3b8; padding: 20px;">No downloadable streams found</div>`;
        }

        setSafeHTML(modalBody, html);

        modalBody.querySelectorAll(".snapwc-btn-copy").forEach(function (b) {
            b.addEventListener("click", function () {
                var u = this.getAttribute("data-url");
                if (u) {
                    navigator.clipboard.writeText(u).then(function () {
                        b.textContent = "✅ Copied";
                        setTimeout(function () { b.textContent = "📋 Copy"; }, 1500);
                    });
                }
            });
        });
    }

    async function startSnapwcParseFlow(targetUrl) {
        renderSnapwcLoading("Connecting to Server 2 API...");

        try {
            var checkRes = await snapwcApiFetch("/api.captcha/is_required", {
                scenario: "parser",
                data: { url: targetUrl }
            }, true);

            if (checkRes && checkRes.status === true) {
                renderSnapwcLoading("Security check triggered. Loading captcha...");
                var genRes = await snapwcApiFetch("/api.captcha/generate", {}, true);
                if (genRes && genRes.captcha_image && genRes.captcha_token) {
                    renderSnapwcCaptcha(targetUrl, genRes);
                    return;
                }
            }

            renderSnapwcLoading("Parsing HD media streams and subtitles...");
            var parseData = await snapwcApiFetch("/api.parser/parse", { url: targetUrl }, false);
            renderSnapwcResults(parseData);

        } catch (err) {
            if (err.message === "CAPTCHA_REQUIRED") {
                renderSnapwcLoading("Security protection triggered. Fetching captcha...");
                try {
                    var gen = await snapwcApiFetch("/api.captcha/generate", {}, true);
                    renderSnapwcCaptcha(targetUrl, gen);
                } catch (e2) {
                    renderSnapwcError("Failed to load captcha: " + e2.message, targetUrl);
                }
            } else {
                renderSnapwcError("Server 2 parsing error: " + err.message, targetUrl);
            }
        }
    }

    // Modal Entrance Handler
    function openDownloadModal(targetUrl, videoEl) {
        currentTargetUrl = targetUrl;
        nativeSourceVideo = videoEl || null;
        nativeTitleHint = "";
        loaderActiveTasks = {};
        floatContainer.classList.remove("minimized");
        floatContainer.classList.add("active");
        updateMinPillText("Video Downloader");

        // By default use Loader.to fast engine
        currentEngine = "loader";
        tabLoader.classList.add("active");
        tabSnapwc.classList.remove("active");
        renderLoaderEngineView(targetUrl);
    }

    // ------------------------------------------------------------
    // 5. FULLSCREEN STATE DETECTION & VIDEO ELEMENT DETECTION
    // ------------------------------------------------------------
    var activeVideo = null;
    var mouseX = -100;
    var mouseY = -100;

    function isFullScreen() {
        try {
            if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
                return true;
            }
            var ytPlayer = document.querySelector("#movie_player, .html5-video-player");
            if (ytPlayer && (ytPlayer.classList.contains("ytp-fullscreen") || ytPlayer.classList.contains("fullscreen"))) {
                return true;
            }
            var watchFlexy = document.querySelector("ytd-watch-flexy");
            if (watchFlexy && (watchFlexy.hasAttribute("fullscreen") || watchFlexy.classList.contains("fullscreen"))) {
                return true;
            }
            if (activeVideo && (activeVideo.classList.contains("fullscreen") || activeVideo.webkitDisplayingFullscreen)) {
                return true;
            }
        } catch (e) {}
        return false;
    }

    function syncFullscreenState() {
        var fs = isFullScreen();
        var docEl = document.documentElement;
        if (fs) {
            if (btn && btn.style.display !== "none") btn.style.display = "none";
            if (tip && tip.style.display !== "none") tip.style.display = "none";
            if (typeof floatContainer !== "undefined" && floatContainer) {
                floatContainer.style.setProperty("display", "none", "important");
            }
            activeVideo = null;
            if (docEl && !docEl.classList.contains("aio-fullscreen-active")) {
                docEl.classList.add("aio-fullscreen-active");
            }
        } else {
            if (typeof floatContainer !== "undefined" && floatContainer) {
                floatContainer.style.removeProperty("display");
            }
            if (docEl && docEl.classList.contains("aio-fullscreen-active")) {
                docEl.classList.remove("aio-fullscreen-active");
            }
        }
        return fs;
    }

    function cleanUrl(raw) {
        if (!raw) return raw;
        try {
            var u = new URL(raw);
            ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "si", "spm", "share_source", "is_from_webapp", "is_copy_link", "sender_device", "web_id", "igshid"].forEach(function (k) { u.searchParams.delete(k); });
            if (platform === "youtube") {
                if (u.hostname === "youtu.be") return "https://www.youtube.com/watch?v=" + u.pathname.split("/").filter(Boolean)[0];
                if (u.pathname.startsWith("/shorts/")) {
                    var sid = u.pathname.split("/")[2];
                    if (sid) return "https://www.youtube.com/shorts/" + sid;
                }
                var v = u.searchParams.get("v");
                if (v) return "https://www.youtube.com/watch?v=" + v;
            }
            if (platform === "tiktok") {
                var m = u.pathname.match(/^\/(@[^/]+)\/video\/(\d+)/);
                if (m) return "https://www.tiktok.com/" + m[1] + "/video/" + m[2];
            }
            if (platform === "twitter") {
                var sm = u.pathname.match(/^\/([^/]+)\/status\/(\d+)/);
                if (sm) return "https://x.com/" + sm[1] + "/status/" + sm[2];
            }
            if (platform === "instagram") {
                var im = u.pathname.match(/^\/(?:p|reel|reels|tv)\/([^/]+)/);
                if (im) return "https://www.instagram.com/" + u.pathname.split("/")[1] + "/" + im[1] + "/";
            }
            if (platform === "facebook") {
                var fv = u.searchParams.get("v");
                if (fv) return "https://www.facebook.com/watch/?v=" + fv;
                var fm = u.pathname.match(/^\/(?:videos|reel|reels|watch)\/(\d+)/);
                if (fm) return "https://www.facebook.com/watch/?v=" + fm[1];
            }
            return u.origin + u.pathname;
        } catch (e) {
            return raw;
        }
    }

    function getTargetUrl(videoElement) {
        if (platform === "youtube") {
            var container = videoElement.closest("ytd-rich-item-renderer, ytm-shorts-lockup-view-model, ytm-shorts-lockup-view-model-v2, ytd-reel-item-renderer, ytd-grid-video-renderer, ytd-compact-video-renderer, ytd-video-renderer, ytd-thumbnail");
            if (container) {
                var link = container.querySelector('a[href*="/shorts/"], a[href*="/watch?v="]');
                if (link && link.href) return cleanUrl(link.href);
            }
            var ytPlayer = document.querySelector("#movie_player");
            if (ytPlayer && ytPlayer.getVideoData) {
                var data = ytPlayer.getVideoData();
                if (data && data.video_id) return "https://www.youtube.com/watch?v=" + data.video_id;
            }
            if (location.pathname.startsWith("/shorts/")) {
                var id = location.pathname.split("/")[2];
                if (id) return "https://www.youtube.com/shorts/" + id;
            }
            var params = new URLSearchParams(location.search);
            var pv = params.get("v");
            if (pv) return "https://www.youtube.com/watch?v=" + pv;
            return cleanUrl(location.href);
        }
        if (platform === "twitter") {
            var article = videoElement.closest("article");
            if (article) {
                var links = Array.from(article.querySelectorAll('a[href*="/status/"]'));
                var statusLink = links.find(function (l) { return /\/status\/\d+$/.test(l.href); });
                if (statusLink) return cleanUrl(statusLink.href);
                if (links.length) return cleanUrl(links[0].href);
            }
            return cleanUrl(location.href);
        }
        if (platform === "tiktok") {
            var cur = videoElement.parentElement;
            var videoId = "";
            var username = "";
            var depth = 0;
            while (cur && depth < 25) {
                if (!videoId && cur.id && cur.id.indexOf("xgwrapper") >= 0) {
                    var idMatch = cur.id.match(/\d{15,}/);
                    if (idMatch) videoId = idMatch[0];
                }
                if (!username) {
                    var userLink = cur.querySelector('a[href*="/@"]');
                    if (userLink) {
                        var userMatch = userLink.href.match(/\/(@[^/?]+)/);
                        if (userMatch) username = userMatch[1];
                    }
                }
                if (videoId && username) break;
                cur = cur.parentElement;
                depth++;
            }
            if (videoId && username) return "https://www.tiktok.com/" + username + "/video/" + videoId;
            if (videoId) return "https://www.tiktok.com/video/" + videoId;
            return cleanUrl(location.href);
        }
        if (platform === "instagram") {
            var igArticle = videoElement.closest("article");
            if (igArticle) {
                var a = igArticle.querySelector('a[href*="/p/"], a[href*="/reels/"], a[href*="/reel/"]');
                if (a) return cleanUrl(location.origin + a.getAttribute("href"));
            }
            return cleanUrl(location.href);
        }
        if (platform === "facebook") {
            var fm = location.href.match(/(?:v=|watch\/|reel\/|reels\/|videos\/)(\d+)/);
            if (fm) return "https://www.facebook.com/watch/?v=" + fm[1];
            var fbArticle = videoElement.closest('[role="article"], [data-pagelet]');
            if (fbArticle) {
                var flinks = Array.from(fbArticle.querySelectorAll('a[href*="/videos/"], a[href*="/watch/"], a[href*="/reel/"]'));
                if (flinks.length) return cleanUrl(flinks[0].href);
            }
            return cleanUrl(location.href);
        }
        return cleanUrl(location.href);
    }

    function updateBtnPos() {
        if (isFullScreen() || !activeVideo || btn.style.display === "none") {
            btn.style.display = "none";
            tip.style.display = "none";
            return;
        }
        var rect = activeVideo.getBoundingClientRect();
        var btnSize = 42;
        var top = rect.top + 15;
        var left = rect.left + (rect.width / 2) - (btnSize / 2);
        if (left < 5) left = 5;
        if (top < 5) top = 5;
        if (top > window.innerHeight - 45) top = window.innerHeight - 45;
        if (left > window.innerWidth - btnSize - 5) left = window.innerWidth - btnSize - 5;
        btn.style.top = top + "px";
        btn.style.left = left + "px";
        tip.style.top = (top + btnSize + 4) + "px";
        tip.style.left = Math.max(4, left - 25) + "px";
    }

    function checkHover() {
        if (syncFullscreenState()) {
            return;
        }
        if (mouseX < 0 || mouseY < 0) return;
        var btnRect = btn.getBoundingClientRect();
        var isHoveringBtn = (btn.style.display === "flex" &&
            mouseX >= btnRect.left && mouseX <= btnRect.right &&
            mouseY >= btnRect.top && mouseY <= btnRect.bottom);
        if (isHoveringBtn) {
            btn.classList.add("tenzaa-hover");
            tip.style.display = "block";
            return;
        }
        btn.classList.remove("tenzaa-hover");
        tip.style.display = "none";

        var found = null;
        var videos = document.querySelectorAll("video");
        for (var i = 0; i < videos.length; i++) {
            var v = videos[i];
            var rect = v.getBoundingClientRect();
            if (mouseX >= rect.left && mouseX <= rect.right &&
                mouseY >= rect.top && mouseY <= rect.bottom &&
                rect.width > 50 && rect.height > 50) {
                var st = window.getComputedStyle(v);
                if (st.display !== "none" && st.visibility !== "hidden") {
                    found = v;
                    break;
                }
            }
        }

        if (!found && platform === "youtube") {
            var wrappers = document.querySelectorAll("#movie_player, .html5-video-player, ytd-player, ytd-thumbnail, ytm-shorts-lockup-view-model, ytm-shorts-lockup-view-model-v2, ytd-reel-item-renderer, ytd-rich-item-renderer, ytd-grid-video-renderer");
            for (var j = 0; j < wrappers.length; j++) {
                var w = wrappers[j];
                var wr = w.getBoundingClientRect();
                if (mouseX >= wr.left && mouseX <= wr.right && mouseY >= wr.top && mouseY <= wr.bottom) {
                    found = w;
                    break;
                }
            }
        }

        if (found) {
            var target = getTargetUrl(found);
            if (!target || target.indexOf("undefined") >= 0) {
                btn.style.display = "none";
                activeVideo = null;
                return;
            }
            activeVideo = found;
            btn.style.display = "flex";
            updateBtnPos();
        } else {
            btn.style.display = "none";
            activeVideo = null;
        }
    }

    window.addEventListener("mousemove", function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        checkHover();
    }, true);

    window.addEventListener("mousedown", function (e) {
        if (btn.style.display === "flex") {
            var rect = btn.getBoundingClientRect();
            if (e.clientX >= rect.left && e.clientX <= rect.right &&
                e.clientY >= rect.top && e.clientY <= rect.bottom) {
                e.preventDefault();
                e.stopPropagation();
                triggerParse();
            }
        }
    }, true);

    btn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        triggerParse();
    });

    window.addEventListener("scroll", function () {
        if (activeVideo && btn.style.display === "flex") updateBtnPos();
    }, { passive: true, capture: true });

    ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"].forEach(function (ev) {
        document.addEventListener(ev, syncFullscreenState, true);
        window.addEventListener(ev, syncFullscreenState, true);
    });

    try {
        var fsObserver = new MutationObserver(function () {
            syncFullscreenState();
        });
        var targetYt = document.querySelector("#movie_player, ytd-watch-flexy, .html5-video-player");
        if (targetYt) {
            fsObserver.observe(targetYt, { attributes: true, attributeFilter: ["class", "fullscreen"] });
        }
    } catch (e) {}

    setInterval(function () {
        if (!syncFullscreenState() && mouseX >= 0 && mouseY >= 0) {
            checkHover();
        }
    }, 300);

    function triggerParse() {
        var targetUrl = activeVideo ? getTargetUrl(activeVideo) : cleanUrl(location.href);
        if (!targetUrl || targetUrl.indexOf("undefined") >= 0) return;

        btn.textContent = "…";
        btn.style.transform = "scale(0.95)";
        tip.style.display = "none";

        openDownloadModal(targetUrl, activeVideo);

        setTimeout(function () {
            btn.textContent = "";
            btn.appendChild(svgIcon);
            btn.style.transform = "scale(1)";
        }, 800);
    }
})();
