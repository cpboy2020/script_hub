// ==UserScript==
// @name         🔥 [2026] All-in-One Video Downloader | YouTube, TikTok, X(Twitter), Instagram, Facebook
// @namespace    https://tenzaa.com/
// @version      2026.1121.3
// @description  [2026 Latest] Download ANY video and audio from YouTube, TikTok, X(Twitter), Instagram, Facebook. Support 4K, 1080P, MP3, MP4, no watermark.
// @author       classccai
// @homepageURL  https://tenzaa.com/
// @supportURL   https://tenzaa.com/
// @icon         https://tenzaa.com/favicon.ico
// @match        *://*.youtube.com/*
// @exclude      *://studio.youtube.com/*
// @exclude      *://music.youtube.com/*
// @exclude      *://accounts.youtube.com/*
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
// @noframes
// @antifeature   referral-link  Promotes tenzaa.com; downloads may be relayed through third-party converters (savenow.to / snapwc.com).
// @grant        GM_xmlhttpRequest
// @grant        GM_download
// @grant        GM_getValue
// @grant        GM_setValue
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
// @connect      *.googlevideo.com
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

    var DEBUG = false;
    try {
        if (typeof GM_getValue === "function") DEBUG = !!GM_getValue("aio_debug", false);
    } catch (e) {}
    function log() {
        if (!DEBUG) return;
        try { console.log.apply(console, ["[AIO]"].concat(Array.prototype.slice.call(arguments))); } catch (e) {}
    }
    log("Script loaded on", location.href);

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

    // ------------------------------------------------------------
    // 0. TUNABLES & STATE
    // ------------------------------------------------------------
    var CONFIG = {
        POLL_INTERVAL_MS: 1800,      // Loader.to progress poll cadence
        POLL_MAX_TRIES: 60,          // ~110s hard ceiling
        DETECT_INTERVAL_MS: 500,     // hover/idle re-check cadence
        HOVER_THROTTLE_MS: 60,       // min gap between pointer hit-tests
        DOWNLOAD_STALL_MS: 30000,    // GM_download silence watchdog
        BLOB_MAX_BYTES: 512 * 1024 * 1024, // above this, only hand out the direct link
        API_TIMEOUT_MS: 25000,
        MAX_SCAN_CHARS: 3000000      // cap on page HTML scanned by regex collectors
    };

    // Loader.to API keys. Only the first entry is a real key - the other two are
    // historical placeholders kept so installations keep working if the owner
    // ever fills them in. Users can override with a personal key.
    var LOADER_API_KEYS = (function () {
        var custom = "";
        try {
            if (typeof GM_getValue === "function") custom = String(GM_getValue("aio_loader_api_key", "") || "").trim();
        } catch (e) {}
        var pool = [
            "dfcb6d76f2f6a9894gjkege8a4ab232222",
            "01a61c3d0b2848cdba1420b7849d4e5d",
            "f2f6a9894gjkege8a4ab232222dfcb6d"
        ];
        if (custom) pool.unshift(custom);
        return pool.filter(function (k) { return k && k.length >= 16; });
    })();

    // Current Active Engine: "loader" or "snapwc"
    var currentEngine = "loader";
    var currentTargetUrl = "";
    var currentVideoTitle = "";
    var currentVideoThumb = "";

    // Engine 1 state: completed links are cached per format, in-flight work is
    // tracked so closing the panel or switching tabs can abort it.
    var loaderActiveTasks = {}; // format -> { downloadUrl }
    var loaderJobs = {};        // format -> { cancel() }

    function cancelLoaderJobs() {
        Object.keys(loaderJobs).forEach(function (k) {
            try { loaderJobs[k].cancel(); } catch (e) {}
            delete loaderJobs[k];
        });
    }

    // Structured error so the UI can react to a cause instead of a string match
    function AIOError(code, message, retryable) {
        var err = new Error(message || code);
        err.code = code;
        err.retryable = retryable !== false;
        return err;
    }

    function sleep(ms) {
        return new Promise(function (resolve) { setTimeout(resolve, ms); });
    }

    // ------------------------------------------------------------
    // 0.1 CSP / TRUSTED TYPES
    //     A named policy only. We deliberately never create the "default"
    //     policy: doing so would silently disable Trusted Types enforcement
    //     for the whole host page and turn this script into an XSS amplifier.
    // ------------------------------------------------------------
    var safeWindow = (typeof unsafeWindow !== "undefined") ? unsafeWindow : window;
    var tt = null;
    try {
        tt = safeWindow.trustedTypes || (typeof window !== "undefined" && window.trustedTypes) || null;
    } catch (e) {}
    var aioPolicy = null;

    function getAioPolicy() {
        if (aioPolicy) return aioPolicy;
        if (!tt || typeof tt.createPolicy !== "function") return null;
        var names = ["aioTrustedPolicy", "aioTrustedPolicyV2", "aioTrustedPolicyV3"];
        for (var i = 0; i < names.length; i++) {
            try {
                aioPolicy = tt.createPolicy(names[i], {
                    // Templates are built in this file and every dynamic value is
                    // escaped at the call site, so returning the input is safe here.
                    createHTML: function (s) { return s; }
                });
                return aioPolicy;
            } catch (e) { /* name already taken - try the next one */ }
        }
        return null;
    }

    // ------------------------------------------------------------
    // 1. HTML RENDERING PIPELINE
    //    setSafeHTML is a trusted-template renderer, NOT a general sanitizer:
    //    callers must pass escaped values. sanitizeFragment() is the second line
    //    of defence (drops scripts, event handler attributes and js: urls).
    // ------------------------------------------------------------
    function escapeHtml(value) {
        return String(value == null ? "" : value).replace(/[&<>"']/g, function (c) {
            return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
        });
    }

    // Only http(s) URLs are allowed to reach href/src attributes.
    // An empty string must NOT be resolved against the page url - new URL("")
    // yields the current document, which would render a bogus download link.
    function safeHttpUrl(raw) {
        var input = String(raw == null ? "" : raw).trim();
        if (!input) return "";
        try {
            var u = new URL(input, location.href);
            if (u.protocol !== "http:" && u.protocol !== "https:") return "";
            return u.href;
        } catch (e) {
            return "";
        }
    }

    function safeImageUrl(raw) {
        var httpish = safeHttpUrl(raw);
        if (httpish) return httpish;
        var s = String(raw || "");
        return /^data:image\/[a-z0-9.+-]+;base64,[a-z0-9+/=\s]+$/i.test(s) ? s : "";
    }

    var FORBIDDEN_TAGS = "script,iframe,object,embed,link,meta,base,form,style,noscript";
    function sanitizeFragment(root) {
        if (!root || !root.querySelectorAll) return;
        Array.prototype.forEach.call(root.querySelectorAll(FORBIDDEN_TAGS), function (n) {
            if (n.parentNode) n.parentNode.removeChild(n);
        });
        Array.prototype.forEach.call(root.querySelectorAll("*"), function (el) {
            var attrs = Array.prototype.slice.call(el.attributes || []);
            for (var i = 0; i < attrs.length; i++) {
                var name = attrs[i].name.toLowerCase();
                var value = attrs[i].value || "";
                if (name.indexOf("on") === 0) {
                    el.removeAttribute(attrs[i].name);
                } else if (name === "href" || name === "src" || name === "xlink:href" || name === "action") {
                    if (/^\s*(javascript|vbscript|data:text\/html)/i.test(value)) el.removeAttribute(attrs[i].name);
                }
            }
        });
    }

    function setSafeHTML(element, htmlString) {
        if (!element) return;
        var parser = new DOMParser();
        var doc = null;
        try {
            doc = parser.parseFromString(String(htmlString == null ? "" : htmlString), "text/html");
        } catch (e) {
            doc = null;
        }
        if (doc && doc.body) {
            sanitizeFragment(doc.body);
            element.textContent = "";
            while (doc.body.firstChild) {
                element.appendChild(doc.body.firstChild);
            }
            return;
        }
        // Fallback: Trusted Types aware assignment (only when parsing failed).
        try {
            var policy = getAioPolicy();
            element.innerHTML = policy ? policy.createHTML(String(htmlString)) : String(htmlString);
        } catch (err) {
            element.textContent = "Render error: " + (err && err.message);
        }
    }

    var styles = `

        /* ------------------------------------------------------------
           Shadow host reset.
           Page styles inherit INTO a shadow tree (font, colour, line-height,
           text-transform...), so "all: initial" is the only reliable way to
           start from a known state. The host is then a zero-size fixed box:
           it must stay transparent to the pointer and must NOT create a
           containing block (no transform / filter / contain), otherwise the
           position:fixed children below would be positioned against it.
           ------------------------------------------------------------ */
        :host {
            all: initial;
            display: block;
            position: fixed;
            top: 0;
            left: 0;
            width: 0;
            height: 0;
            overflow: visible;
            pointer-events: none;
            z-index: 2147483647;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            font-size: 13px;
            /* "normal" (the initial value) keeps the metrics identical to the
               pre-shadow build; a unitless ratio here shifts every row. */
            line-height: normal;
            color: #f1f5f9;
            text-align: left;
            direction: ltr;
        }
        #tenzaa-aio-btn {
            position: fixed;
            z-index: 2147483640;
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
            pointer-events: auto;
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
            z-index: 2147483639;
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
            position: fixed;
            right: 24px;
            bottom: 24px;
            z-index: 2147483645;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            pointer-events: none; /* Never block clicks on background or video player */
            background: transparent;
            width: auto;
            height: auto;
            margin: 0;
            padding: 0;
            border: none;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        }

        #aio-modal {
            background: rgba(15, 23, 42, 0.96);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            color: #f1f5f9;
            width: 440px;
            max-width: calc(100vw - 36px);
            max-height: 520px;
            border-radius: 18px;
            border: 1px solid rgba(255, 255, 255, 0.14);
            box-shadow: 0 16px 40px rgba(0, 0, 0, 0.65), 0 0 0 1px rgba(255, 255, 255, 0.08);
            display: none;
            flex-direction: column;
            overflow: hidden;
            pointer-events: auto; /* Only respond within this 440px card */
            transform: scale(0.92) translateY(20px);
            opacity: 0;
            transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.18s ease;
        }
        #aio-float-container.active:not(.minimized) #aio-modal {
            display: flex;
            transform: scale(1) translateY(0);
            opacity: 1;
        }

        #aio-min-pill {
            display: none;
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
            pointer-events: auto;
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
            display: flex;
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
            text-decoration: none;
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
            text-decoration: none;
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

        /* Fullscreen. A shadow tree cannot be matched by "html:fullscreen #id",
           so the host carries the state class and the rules hang off :host(). */
        :host(.aio-fs) #tenzaa-aio-btn,
        :host(.aio-fs) #tenzaa-tip,
        :host(.aio-fs) #aio-float-container {
            display: none;
        }

    `;

    // ------------------------------------------------------------
    // 2. DOM ELEMENTS - all of it inside a single shadow root
    // ------------------------------------------------------------
    // Isolation buys three things at once: the host page can no longer restyle
    // or break the panel, our stylesheet no longer needs "!important" to win,
    // and page scripts cannot reach in to read or repaint the UI.
    ["#aio-shadow-host", "#tenzaa-aio-btn", "#tenzaa-tip", "#snapwc-overlay", "#aio-float-container", "#aio-style-tag"].forEach(function (sel) {
        document.querySelectorAll(sel).forEach(function (el) { el.remove(); });
    });

    var uiHost = document.createElement("div");
    uiHost.id = "aio-shadow-host";
    // Page CSS can still match the host itself - it is a real <div> in the light
    // DOM - so its box is pinned inline too. A generic "div { transform: ... }"
    // or "contain: ..." rule from the site would otherwise turn the host into a
    // containing block and drag every position:fixed child along with it.
    uiHost.style.cssText = "position:fixed;left:0;top:0;width:0;height:0;overflow:visible;" +
        "pointer-events:none;z-index:2147483647;margin:0;padding:0;border:0;background:none;" +
        "transform:none;filter:none;contain:none;will-change:auto;";
    var uiRoot = null;
    try {
        uiRoot = uiHost.attachShadow({ mode: "open" });
    } catch (e) {
        uiRoot = null;
    }
    // No attachShadow (very old engine): still works, just without isolation.
    if (!uiRoot) uiRoot = uiHost;

    // ShadowRoot.getElementById is not available on older engines, so try it and
    // fall back to a scoped query. Every ID lookup below goes through this.
    function uiEl(id) {
        if (typeof uiRoot.getElementById === "function") {
            var direct = uiRoot.getElementById(id);
            if (direct) return direct;
        }
        return uiRoot.querySelector("#" + id);
    }

    (document.body || document.documentElement).appendChild(uiHost);

    // One stylesheet, inside the shadow root. Nothing outside can match it.
    var styleEl = document.createElement("style");
    styleEl.textContent = styles;
    uiRoot.appendChild(styleEl);

    var btn = document.createElement("div");
    btn.id = "tenzaa-aio-btn";
    var svgNs = "http://www.w3.org/2000/svg";
    var svgIcon = document.createElementNS(svgNs, "svg");
    svgIcon.setAttribute("viewBox", "0 0 24 24");
    var path = document.createElementNS(svgNs, "path");
    path.setAttribute("d", "M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z");
    svgIcon.appendChild(path);
    btn.appendChild(svgIcon);
    // Inside a zero-size host a fixed element with no offsets lands in the
    // viewport corner, so park it off-screen until updateBtnPos() places it.
    btn.style.top = "-9999px";
    btn.style.left = "-9999px";
    uiRoot.appendChild(btn);

    var tip = document.createElement("div");
    tip.id = "tenzaa-tip";
    tip.textContent = "⚡ Fast Video Downloader";
    uiRoot.appendChild(tip);

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
    uiRoot.appendChild(floatContainer);

    var modalBody = uiEl("snapwc-body");
    var closeBtn = uiEl("aio-close");
    var minBtn = uiEl("aio-minimize");
    var minPill = uiEl("aio-min-pill");
    var minText = uiEl("aio-min-text");
    var tabLoader = uiEl("tab-loader");
    var tabSnapwc = uiEl("tab-snapwc");

    function closeModal() {
        // Nothing should keep polling or parsing once the panel is gone.
        cancelLoaderJobs();
        snapwcParseSeq++;
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
        // A parse that is still in flight for the other tab must not repaint.
        snapwcParseSeq++;
        renderLoaderEngineView(currentTargetUrl);
    });

    tabSnapwc.addEventListener("click", function () {
        if (currentEngine === "snapwc") return;
        currentEngine = "snapwc";
        tabSnapwc.classList.add("active");
        tabLoader.classList.remove("active");
        // Abandon any transcoding job - its target panel is gone now.
        cancelLoaderJobs();
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

        // The stylesheet pins the container with right/bottom, so a drag has to
        // switch to left/top. Inline declarations outrank every rule in the
        // shadow stylesheet, so no "!important" is needed on either side.
        function applyPosition(x, y) {
            floatContainer.style.right = "auto";
            floatContainer.style.bottom = "auto";
            floatContainer.style.left = Math.round(x) + "px";
            floatContainer.style.top = Math.round(y) + "px";
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

    // Serialising the whole document is expensive (5-10MB of markup on Facebook),
    // so it happens at most once per click and is truncated. No media URL on a
    // supported site lives beyond the first few megabytes of markup.
    var pageHtmlCache = null;
    var pageHtmlCacheKey = "";
    function pageHtml() {
        var key = location.href;
        if (pageHtmlCache !== null && pageHtmlCacheKey === key) return pageHtmlCache;
        try {
            pageHtmlCache = document.documentElement.innerHTML.slice(0, CONFIG.MAX_SCAN_CHARS);
        } catch (e) {
            pageHtmlCache = "";
        }
        pageHtmlCacheKey = key;
        return pageHtmlCache;
    }
    function invalidatePageHtml() {
        pageHtmlCache = null;
        pageHtmlCacheKey = "";
    }

    async function fetchPageHtml(url) {
        var ctrl = (typeof AbortController !== "undefined") ? new AbortController() : null;
        var timer = ctrl ? setTimeout(function () { ctrl.abort(); }, CONFIG.API_TIMEOUT_MS) : null;
        try {
            var res = await fetch(url, {
                credentials: "include",
                headers: { "Accept": "text/html,application/xhtml+xml" },
                redirect: "follow",
                signal: ctrl ? ctrl.signal : undefined
            });
            if (!res.ok) {
                throw AIOError("HTTP_" + res.status, "HTTP " + res.status, res.status >= 500 || res.status === 429);
            }
            return await res.text();
        } finally {
            if (timer) clearTimeout(timer);
        }
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
        collectByPatterns(list, pageHtml(), FB_PATTERNS, 20);

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
            var primary = pageHtml().match(/"video_versions"\s*:\s*\[\s*\{[^}]*?"url"\s*:\s*"([^"]+)"/);
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
        collectByPatterns(list, pageHtml(), IG_PATTERNS, 20);

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
        collectByPatterns(list, pageHtml(), TW_PATTERNS, 20);
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
    // Emoji stripping must not eat CJK Extension B characters (also astral), so
    // prefer Unicode property escapes and fall back to the old surrogate sweep.
    var EMOJI_RE = null;
    try {
        EMOJI_RE = new RegExp("[\\p{Extended_Pictographic}\\p{Emoji_Modifier}\\uFE0F\\u200D]", "gu");
    } catch (e) {
        EMOJI_RE = null;
    }

    function cleanTitleText(raw) {
        var text = String(raw || "")
            .replace(/[\u200B-\u200F\u202A-\u202E\uFEFF\uFFFD]/g, "");
        text = EMOJI_RE ? text.replace(EMOJI_RE, "")
                        : text.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "");
        return text
            .replace(/[\u2600-\u27BF\u2B00-\u2BFF]/g, "")             // symbols
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

        var base = title.replace(/[\\/:*?"<>|]+/g, "_")
                        .replace(/[\u0000-\u001f\u007f]+/g, "")
                        .replace(/\s+/g, " ")
                        .trim()
                        .slice(0, 70)
                        .trim();
        // Windows rejects reserved device names and names ending in a dot/space
        if (/^(con|prn|aux|nul|com[1-9]|lpt[1-9])$/i.test(base)) base = "_" + base;
        base = base.replace(/[. ]+$/g, "");
        if (!base) base = "video";

        var ext = "mp4";
        if (fmt && fmt.type === "audio") {
            if (/flac/i.test(candidateUrl)) ext = "flac";
            else if (/\.m4a/i.test(candidateUrl)) ext = "m4a";
            else ext = "mp3";
        }
        return base + "_" + (fmt ? fmt.id : "hd") + "." + ext;
    }

    // A programmatic anchor click is not subject to the popup blocker, so it
    // replaces window.open() inside timer/await callbacks.
    function triggerAnchorDownload(url, fileName) {
        var href = safeHttpUrl(url);
        if (!href) return false;
        var a = document.createElement("a");
        a.href = href;
        a.target = "_blank";
        a.rel = "noreferrer noopener";
        if (fileName) a.download = fileName;
        a.style.display = "none";
        document.body.appendChild(a);
        try { a.click(); } catch (e) {}
        setTimeout(function () { if (a.parentNode) a.parentNode.removeChild(a); }, 1000);
        return true;
    }

    function gmDownloadFile(url, fileName, onProgress) {
        return new Promise(function (resolve, reject) {
            if (typeof GM_download !== "function") {
                reject(AIOError("NO_GM_DOWNLOAD", "GM_download not available", false));
                return;
            }
            var finished = false;
            var task = null;
            var lastTick = Date.now();

            // Silence watchdog. Cold CDN handshakes can take 20s+, and not every
            // server reports progress, so the ceiling has to be generous.
            var watchdog = setInterval(function () {
                if (!finished && Date.now() - lastTick > CONFIG.DOWNLOAD_STALL_MS) {
                    finished = true;
                    clearInterval(watchdog);
                    try { if (task && task.abort) task.abort(); } catch (e) {}
                    reject(AIOError("STALLED", "GM_download stalled", true));
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
                        done(reject, AIOError("GM_DOWNLOAD_FAILED", (err && (err.error || err.message)) || "GM_download failed", true));
                    },
                    ontimeout: function () { done(reject, AIOError("GM_DOWNLOAD_TIMEOUT", "GM_download timeout", true)); }
                });
            } catch (e) {
                done(reject, e);
            }
        });
    }

    function blobDownloadViaGM(url, fileName, onProgress) {
        return new Promise(function (resolve, reject) {
            var settled = false;
            var req = null;
            function fail(err) {
                if (settled) return;
                settled = true;
                try { if (req && req.abort) req.abort(); } catch (e) {}
                reject(err);
            }
            function succeed(v) {
                if (settled) return;
                settled = true;
                resolve(v);
            }

            req = GM_xmlhttpRequest({
                method: "GET",
                url: url,
                responseType: "blob",
                headers: { "Referer": location.origin + "/" },
                timeout: 600000,
                onprogress: function (p) {
                    if (settled) return;
                    // A 4K feature-length file does not fit in a Blob; abort early
                    // instead of killing the tab with an OOM.
                    if (p && p.lengthComputable && p.total > CONFIG.BLOB_MAX_BYTES) {
                        fail(AIOError("TOO_LARGE", "File exceeds " + Math.round(CONFIG.BLOB_MAX_BYTES / 1048576) + "MB - use the direct link instead", false));
                        return;
                    }
                    if (onProgress && p && p.lengthComputable) {
                        onProgress({ loaded: p.loaded, total: p.total });
                    }
                },
                onload: function (res) {
                    if (settled) return;
                    if (res.status < 200 || res.status >= 300) {
                        fail(AIOError("HTTP_" + res.status, "HTTP " + res.status, res.status >= 500));
                        return;
                    }
                    var blob = res.response;
                    if (!blob || !blob.size) {
                        fail(AIOError("EMPTY_BODY", "Empty response body", false));
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
                    succeed(true);
                },
                onerror: function () { fail(AIOError("NETWORK", "Network error while downloading", true)); },
                ontimeout: function () { fail(AIOError("TIMEOUT", "Download timed out", true)); }
            });
        });
    }

    async function downloadNativeUrl(url, fileName, onProgress) {
        // Route 1: browser-level download (fast, no memory cost)
        try {
            return await gmDownloadFile(url, fileName, onProgress);
        } catch (e) {
            console.warn("[AIO] GM_download failed:", e && e.code, e && e.message);
        }
        // Route 2: fetch the file as a Blob and save it
        try {
            return await blobDownloadViaGM(url, fileName, onProgress);
        } catch (e2) {
            console.warn("[AIO] Blob download failed:", e2 && e2.code, e2 && e2.message);
        }
        // Route 3: last resort - anchor click, which survives the popup blocker
        if (!triggerAnchorDownload(url, fileName)) {
            throw AIOError("BAD_URL", "Invalid download url", false);
        }
        return "opened";
    }

    // Shared clipboard helper: keeps the button label in sync and never throws
    // an unhandled rejection on insecure origins (clipboard API is gated).
    function copyTextToClipboard(text, btn, idleLabel) {
        var value = String(text || "");
        var done = function () {
            if (!btn) return;
            btn.textContent = "✅ Copied";
            setTimeout(function () { btn.textContent = idleLabel || "📋 Copy"; }, 1500);
        };
        var fallback = function () {
            try { window.prompt("Copy this link:", value); } catch (e) {}
        };
        try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(value).then(done).catch(fallback);
                return;
            }
        } catch (e) { /* fall through */ }
        fallback();
    }

    function renderNativeSuccess(container, url, fileName) {
        var href = safeHttpUrl(url);
        if (!href) {
            setSafeHTML(container, `<span style="font-size:11px;color:#f87171;">Link unavailable</span>`);
            return;
        }
        setSafeHTML(container, `
            <button class="snapwc-btn-copy" data-url="${escapeHtml(href)}" title="Copy direct link">📋 Copy</button>
            <a href="${escapeHtml(href)}" target="_blank" rel="noreferrer noopener" download="${escapeHtml(fileName)}" class="snapwc-btn-dl ready" title="Click to download again">🎉 Download Again</a>
        `);
        var copyBtn = container.querySelector(".snapwc-btn-copy");
        if (copyBtn) {
            copyBtn.addEventListener("click", function () {
                copyTextToClipboard(copyBtn.getAttribute("data-url"), copyBtn, "📋 Copy");
            });
        }
    }

    // Retrying the same failing server is pointless: hop to the other engine.
    function renderFailedState(container, targetUrl, fmt, reason, extraHint) {
        setSafeHTML(container, `
            <span style="font-size: 11px; color: #f87171;" title="${escapeHtml(reason || "Unavailable")}">Failed</span>
            <button class="snapwc-btn-dl" data-fmt="${escapeHtml(fmt.id)}">🔄 Other server</button>
        `);
        var retry = container.querySelector("button.snapwc-btn-dl");
        if (retry) {
            retry.addEventListener("click", function () {
                if (currentEngine === "loader") tabSnapwc.click();
                else tabLoader.click();
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
        return isNativePlatform();
    }

    // ------------------------------------------------------------
    // 3. ENGINE 1: LOADER.TO PURE HTTP REST API ENGINE
    // ------------------------------------------------------------
    function gmRequest(opts) {
        return new Promise(function (resolve, reject) {
            GM_xmlhttpRequest(Object.assign({}, opts, {
                onload: function (res) {
                    if (res.status >= 200 && res.status < 300) {
                        try {
                            resolve(JSON.parse(res.responseText));
                        } catch (e) {
                            resolve(res.responseText);
                        }
                    } else if (res.status === 401 || res.status === 403) {
                        // Quota exhausted / key revoked - not a network problem
                        reject(AIOError("AUTH", "Server rejected the API key (HTTP " + res.status + ")", false));
                    } else if (res.status === 429) {
                        reject(AIOError("RATE_LIMIT", "Too many requests (HTTP 429), slow down", true));
                    } else {
                        reject(AIOError("HTTP_" + res.status, "HTTP " + res.status + ": " + res.responseText, res.status >= 500));
                    }
                },
                onerror: function () {
                    reject(AIOError("NETWORK", "Network request failed. Please check your network connection or proxy.", true));
                },
                ontimeout: function () {
                    reject(AIOError("TIMEOUT", "Request timed out.", true));
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
            var dlApi = "https://p.savenow.to/api/v2/download?format=" + encodeURIComponent(formatVal) +
                        "&url=" + encUrl + "&apikey=" + encodeURIComponent(apiKey);
            try {
                var res = await gmRequest({
                    method: "GET",
                    url: dlApi,
                    headers: {
                        "Origin": "https://en.loader.to",
                        "Referer": "https://en.loader.to/1/",
                        "Accept": "application/json, text/plain, */*"
                    },
                    timeout: CONFIG.API_TIMEOUT_MS
                });
                if (res && (res.id || res.download_url)) {
                    return res;
                }
                lastErr = AIOError("NO_TASK", "Server returned no task id" +
                    (res && res.message ? ": " + res.message : ""), true);
            } catch (e) {
                lastErr = e;
                // Rate limited: stop hammering, surface the real cause
                if (e && e.code === "RATE_LIMIT") break;
            }
            if (i < LOADER_API_KEYS.length - 1) await sleep(400);
        }
        throw lastErr || AIOError("NO_TASK", "Failed to create transcoding task from Server 1", true);
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
        var videoTitle = currentVideoTitle || document.title.replace(/\s*[-–]\s*YouTube$/, "") || "Online Video";
        var videoCover = safeImageUrl(currentVideoThumb);

        // If on YouTube and no thumbnail yet, extract standard thumbnail
        if (!videoCover && platform === "youtube") {
            var vidMatch = String(targetUrl || "").match(/(?:v=|\/shorts\/|\/embed\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
            if (vidMatch) {
                videoCover = "https://i.ytimg.com/vi/" + vidMatch[1] + "/hqdefault.jpg";
            }
        }

        var safeTitleText = escapeHtml(videoTitle);
        var html = `
            <div class="snapwc-video-info">
                ${videoCover ? `<img class="snapwc-thumb" src="${escapeHtml(videoCover)}" referrerpolicy="no-referrer" alt="Thumbnail" />` : ''}
                <div class="snapwc-meta">
                    <div class="snapwc-platform-tag">
                        <span>${preferNativeFirst() ? "⚡" : "🚀"}</span>
                        <span>${preferNativeFirst() ? "Direct CDN Link · Highest Quality · Instant" : "Server 1: High-Speed Transcoder (Ultra HD)"}</span>
                    </div>
                    <div class="snapwc-title" title="${safeTitleText}">${safeTitleText}</div>
                    ${videoCover ? `<div style="margin-top: 4px;"><a href="${escapeHtml(videoCover)}" target="_blank" rel="noreferrer noopener" download class="snapwc-btn-copy" style="font-size: 11px; padding: 2px 7px; text-decoration: none;">🖼️ Thumbnail</a></div>` : ''}
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

        var videoListEl = uiEl("loader-video-list");
        var audioListEl = uiEl("loader-audio-list");

        LOADER_FORMATS.forEach(function (fmt) {
            var item = document.createElement("div");
            item.className = "snapwc-item";
            item.id = "loader-row-" + fmt.id;

            setSafeHTML(item, `
                <div class="snapwc-item-info">
                    <span class="snapwc-badge ${fmt.badge}">${escapeHtml(fmt.label)}</span>
                    <span style="font-size: 12.5px; color: #cbd5e1;">${escapeHtml(fmt.desc)}</span>
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
        var actionContainer = uiEl("loader-action-" + fmt.id);
        if (!actionContainer) return;

        // Already produced a link earlier in this panel session
        var existing = loaderActiveTasks[fmt.id];
        if (existing && existing.downloadUrl) {
            triggerAnchorDownload(existing.downloadUrl, buildFileName(existing.downloadUrl, fmt));
            return;
        }

        // One job per format: clicking again supersedes the previous attempt
        if (loaderJobs[fmt.id]) {
            try { loaderJobs[fmt.id].cancel(); } catch (e) {}
        }
        var job = { cancelled: false, cancel: function () { job.cancelled = true; } };
        loaderJobs[fmt.id] = job;

        // A cancelled job, or one whose panel was re-rendered, must never touch
        // the DOM again - this is what used to leak 90s of writes after close.
        function alive() {
            return !job.cancelled && actionContainer.isConnected;
        }

        function resetProgressUI(message, width) {
            setSafeHTML(actionContainer, `
                <div class="loader-progress-wrap">
                    <div class="loader-progress-text" id="loader-txt-${fmt.id}">${escapeHtml(message || "Creating task...")}</div>
                    <div class="loader-progress-bar">
                        <div class="loader-progress-fill" id="loader-fill-${fmt.id}" style="width: ${Number(width) || 15}%;"></div>
                    </div>
                </div>
                <button class="snapwc-btn-dl processing" disabled>⏳ Processing</button>
            `);
            return {
                txt: uiEl("loader-txt-" + fmt.id),
                fill: uiEl("loader-fill-" + fmt.id)
            };
        }

        var ui = resetProgressUI("Creating task...", 15);
        var txtEl = ui.txt;
        var fillEl = ui.fill;

        try {
            // ---- STEP 0: Facebook / Instagram / X / TikTok try the CDN first ----
            if (preferNativeFirst()) {
                var nativeOk = await tryNativeRoute(targetUrl, fmt, actionContainer, txtEl, fillEl);
                if (!alive()) return;
                if (nativeOk) return;
                ui = resetProgressUI("Switching to high-speed server...", 15);
                txtEl = ui.txt;
                fillEl = ui.fill;
            }

            // ---- STEP 1: create the transcoding task ----
            var taskData = await loaderCreateTask(targetUrl, fmt.id);
            if (!alive()) return;
            if (taskData.info && taskData.info.title && !currentVideoTitle) {
                currentVideoTitle = taskData.info.title;
            }
            if (taskData.info && taskData.info.image && !currentVideoThumb) {
                currentVideoThumb = taskData.info.image;
            }

            // Direct download URL returned immediately
            if (taskData.download_url) {
                onLoaderTaskCompleted(fmt, taskData.download_url, actionContainer);
                triggerAnchorDownload(taskData.download_url, buildFileName(taskData.download_url, fmt));
                return;
            }

            var taskId = taskData.id;
            if (!taskId) {
                throw AIOError("NO_TASK_ID", "API did not return a valid task ID", true);
            }

            if (txtEl) txtEl.textContent = "Transcoding: 10%";
            if (fillEl) fillEl.style.width = "25%";

            // ---- STEP 2: poll (cancellable, bounded) ----
            for (var tries = 0; tries < CONFIG.POLL_MAX_TRIES; tries++) {
                await sleep(CONFIG.POLL_INTERVAL_MS);
                if (!alive()) return;

                var pdata;
                try {
                    pdata = await loaderPollProgress(taskId);
                } catch (pe) {
                    // A single failed poll is normal; a dead key is not
                    if (pe && pe.code === "AUTH") throw pe;
                    continue;
                }
                if (!alive()) return;

                if (pdata && pdata.download_url) {
                    onLoaderTaskCompleted(fmt, pdata.download_url, actionContainer);
                    triggerAnchorDownload(pdata.download_url, buildFileName(pdata.download_url, fmt));
                    return;
                }

                // Real failure detection (the old "Failed at 95%" hang)
                var serverFailed = pdata && (pdata.success === 0 || pdata.success === false) &&
                    ((Number(pdata.progress) || 0) >= 1000 || /fail|error|not supported|unavailable/i.test(pdata.text || ""));

                if (serverFailed) {
                    if (txtEl) txtEl.textContent = "Server cannot process this video. Trying direct link...";
                    if (fillEl) fillEl.style.width = "60%";
                    var okFail = await tryNativeRoute(targetUrl, fmt, actionContainer, txtEl, fillEl);
                    if (!alive()) return;
                    if (!okFail) {
                        renderFailedState(
                            actionContainer, targetUrl, fmt,
                            (pdata && pdata.message) || (pdata && pdata.text) || "Server failed to process this video",
                            "server unavailable"
                        );
                    }
                    return;
                }

                // Loader.to counts progress in 1/1000 units, but tolerate 0-100
                var raw = Number(pdata && pdata.progress) || 0;
                var pct = raw > 100 ? raw / 10 : raw;
                var prog = Math.min(95, Math.max(10, pct));
                var smsg = (pdata && pdata.text) || "Processing";
                if (txtEl) txtEl.textContent = smsg + " (" + prog.toFixed(0) + "%)";
                if (fillEl) fillEl.style.width = prog.toFixed(0) + "%";
                updateMinPillText("⏳ " + fmt.label + ": " + prog.toFixed(0) + "%");
            }

            // Polling budget exhausted
            if (!alive()) return;
            if (txtEl) txtEl.textContent = "Server is slow. Trying direct link...";
            var okTimeout = await tryNativeRoute(targetUrl, fmt, actionContainer, txtEl, fillEl);
            if (!alive()) return;
            if (!okTimeout) {
                renderFailedState(actionContainer, targetUrl, fmt, "Transcoding timed out", "timed out");
            }
        } catch (err) {
            if (!alive()) return;
            // Creation failed entirely -> last chance: native direct link
            var okFallback = await tryNativeRoute(targetUrl, fmt, actionContainer, txtEl, fillEl);
            if (!alive()) return;
            if (!okFallback) {
                var hint = (err && err.code === "AUTH") ? "api key rejected" : "request failed";
                renderFailedState(actionContainer, targetUrl, fmt, (err && err.message) || "Unknown error", hint);
            }
        } finally {
            if (loaderJobs[fmt.id] === job) delete loaderJobs[fmt.id];
        }
    }

    function updateMinPillText(text) {
        if (minText) {
            minText.textContent = text || "Video Downloader";
        }
    }

    function onLoaderTaskCompleted(fmt, downloadUrl, container) {
        var href = safeHttpUrl(downloadUrl);
        loaderActiveTasks[fmt.id] = { downloadUrl: href || downloadUrl };
        updateMinPillText("✅ " + fmt.label + " Ready");
        if (!href) {
            setSafeHTML(container, `<span style="font-size:11px;color:#f87171;">Server returned an invalid link</span>`);
            return;
        }
        setSafeHTML(container, `
            <button class="snapwc-btn-copy" data-url="${escapeHtml(href)}" title="Copy direct link">📋 Copy</button>
            <a href="${escapeHtml(href)}" target="_blank" rel="noreferrer noopener" download class="snapwc-btn-dl ready" title="Click to download">🎉 Download Now</a>
        `);
        var copyBtn = container.querySelector(".snapwc-btn-copy");
        if (copyBtn) {
            copyBtn.addEventListener("click", function () {
                copyTextToClipboard(downloadUrl, copyBtn, "📋 Copy");
            });
        }
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

    // The server only accepts 512-bit client keys. Note that this is obfuscation,
    // not real confidentiality: a 512-bit RSA key is factorable, and the AES layer
    // has no MAC. Keep it for protocol compatibility, never for trust decisions.
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
        // Slice lengths must be explicit: WordArray.create(words) infers sigBytes
        // from words.length, which silently truncates a non 16-byte-aligned body.
        if (parsed.sigBytes <= 16) throw AIOError("BAD_CIPHERTEXT", "Response payload is too short", false);
        var iv = CryptoJS.lib.WordArray.create(parsed.words.slice(0, 4), 16);
        var ciphertext = CryptoJS.lib.WordArray.create(parsed.words.slice(4), parsed.sigBytes - 16);
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
                        // 422 is also used for plain validation errors, so keep the
                        // raw body for the caller to inspect when it is not a captcha.
                        var body422 = String(res.responseText || "");
                        if (/captcha/i.test(body422)) {
                            reject(AIOError("CAPTCHA_REQUIRED", "CAPTCHA_REQUIRED", true));
                        } else {
                            reject(AIOError("HTTP_422", "Server rejected the request: " + body422.slice(0, 200), false));
                        }
                    } else if (res.status === 429) {
                        reject(AIOError("RATE_LIMIT", "Too many requests (HTTP 429)", true));
                    } else {
                        reject(AIOError("HTTP_" + res.status, "HTTP " + res.status + ": " + String(res.responseText || "").slice(0, 200), res.status >= 500));
                    }
                },
                onerror: function () {
                    reject(AIOError("NETWORK", "Network request failed. Please check your connection.", true));
                },
                ontimeout: function () {
                    reject(AIOError("TIMEOUT", "Request timed out, please retry.", true));
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
                <div class="snapwc-loading-text">${escapeHtml(msg || "Parsing video streams via Server 2...")}</div>
            </div>
        `);
    }

    function renderSnapwcError(errText, retryUrl) {
        setSafeHTML(modalBody, `
            <div class="snapwc-err-box">
                <div style="font-size: 32px;">⚠️</div>
                <div>${escapeHtml(errText)}</div>
                <div style="display: flex; gap: 10px; margin-top: 6px;">
                    <button class="aio-switch-btn" id="snapwc-switch-loader">🚀 Switch to Server 1 (High-Speed)</button>
                    ${retryUrl ? '<button class="aio-switch-btn" id="snapwc-retry-btn">Retry Parse</button>' : ''}
                </div>
            </div>
        `);
        uiEl("snapwc-switch-loader")?.addEventListener("click", function () {
            tabLoader.click();
        });
        if (retryUrl) {
            uiEl("snapwc-retry-btn")?.addEventListener("click", function () {
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
                    <img class="snapwc-captcha-img" id="snapwc-cimg" src="${escapeHtml(safeImageUrl(captchaData.captcha_image))}" title="Click to refresh captcha" alt="Captcha" />
                    <input type="text" class="snapwc-captcha-input" id="snapwc-cinput" maxlength="6" autocomplete="off" placeholder="CODE" autofocus />
                </div>
                <div class="snapwc-captcha-err" id="snapwc-cerr" style="color: #f87171; font-size: 12px; min-height: 16px;"></div>
                <button class="snapwc-captcha-btn" id="snapwc-cbtn">Verify & Download</button>
            </div>
        `);

        var cimg = uiEl("snapwc-cimg");
        var cinput = uiEl("snapwc-cinput");
        var cbtn = uiEl("snapwc-cbtn");
        var cerr = uiEl("snapwc-cerr");
        var currentToken = captchaData.captcha_token;

        setTimeout(function () { cinput.focus(); }, 100);

        async function refreshCaptcha() {
            cimg.style.opacity = "0.5";
            try {
                var fresh = await snapwcApiFetch("/api.captcha/generate", {}, true);
                if (fresh.captcha_image && fresh.captcha_token) {
                    cimg.src = safeImageUrl(fresh.captcha_image);
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
        var cover = safeImageUrl(data.cover || currentVideoThumb || "");
        var videos = Array.isArray(data.videos) ? data.videos : [];
        var muxed = Array.isArray(data.muxed) ? data.muxed : [];
        var audios = Array.isArray(data.audios) ? data.audios : [];

        if (title && !currentVideoTitle) currentVideoTitle = title;
        if (cover && !currentVideoThumb) currentVideoThumb = cover;

        // Anything that is not a plain http(s) url is dropped: these strings come
        // from a third-party API and end up in href attributes.
        var allVideos = [];
        muxed.forEach(function (m) {
            var u = safeHttpUrl(m && m.url);
            if (!u) return;
            allVideos.push({
                quality: m.quality_note || (m.quality ? m.quality + "p" : "HD"),
                ext: (m.ext || "MP4").toUpperCase(),
                size: formatSize(m.size),
                url: u,
                isMuxed: true
            });
        });
        videos.forEach(function (v) {
            var u = safeHttpUrl(v && v.url);
            if (!u) return;
            allVideos.push({
                quality: v.quality_note || (v.quality ? v.quality + "p" : "Video"),
                ext: (v.ext || "MP4").toUpperCase(),
                size: formatSize(v.size),
                url: u,
                isMuxed: false
            });
        });
        var audioList = [];
        audios.forEach(function (a) {
            var u = safeHttpUrl(a && a.url);
            if (!u) return;
            audioList.push({
                quality: a.quality_note || (a.quality ? a.quality + "kbps" : "Audio"),
                ext: (a.ext || "MP3").toUpperCase(),
                size: formatSize(a.size),
                url: u
            });
        });

        var safeTitle = escapeHtml(title);
        var html = `
            <div class="snapwc-video-info">
                ${cover ? `<img class="snapwc-thumb" src="${escapeHtml(cover)}" referrerpolicy="no-referrer" alt="Thumbnail" />` : ''}
                <div class="snapwc-meta">
                    <div class="snapwc-platform-tag">
                        <span>⚡</span>
                        <span>Server 2: Direct Stream Parser</span>
                    </div>
                    <div class="snapwc-title" title="${safeTitle}">${safeTitle}</div>
                    ${cover ? `<div style="margin-top: 4px;"><a href="${escapeHtml(cover)}" target="_blank" rel="noreferrer noopener" download class="snapwc-btn-copy" style="font-size: 11px; padding: 2px 7px; text-decoration: none;">🖼️ Thumbnail</a></div>` : ''}
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
                            <span class="snapwc-badge ${v.isMuxed ? 'green' : 'blue'}">${escapeHtml(v.quality)}</span>
                            <span style="font-size: 13px; font-weight: 600;">${escapeHtml(v.ext)}</span>
                            ${v.size ? `<span class="snapwc-size">${escapeHtml(v.size)}</span>` : ''}
                            ${v.isMuxed ? `<span style="font-size: 10px; color: #34d399;">(with Audio)</span>` : ''}
                        </div>
                        <div class="snapwc-actions">
                            <button class="snapwc-btn-copy" data-url="${escapeHtml(v.url)}" title="Copy direct link">📋 Copy</button>
                            <a href="${escapeHtml(v.url)}" target="_blank" download rel="noreferrer noopener" class="snapwc-btn-dl">⬇ Download</a>
                        </div>
                    </div>
                `;
            });
            html += `</div></div>`;
        }

        if (audioList.length > 0) {
            html += `
                <div>
                    <div class="snapwc-section-title">🎵 Audio Streams</div>
                    <div class="snapwc-list">
            `;
            audioList.slice(0, 5).forEach(function (a) {
                html += `
                    <div class="snapwc-item">
                        <div class="snapwc-item-info">
                            <span class="snapwc-badge orange">${escapeHtml(a.quality)}</span>
                            <span style="font-size: 13px; font-weight: 600;">${escapeHtml(a.ext)}</span>
                            ${a.size ? `<span class="snapwc-size">${escapeHtml(a.size)}</span>` : ''}
                        </div>
                        <div class="snapwc-actions">
                            <button class="snapwc-btn-copy" data-url="${escapeHtml(a.url)}" title="Copy audio link">📋 Copy</button>
                            <a href="${escapeHtml(a.url)}" target="_blank" download rel="noreferrer noopener" class="snapwc-btn-dl">⬇ Download</a>
                        </div>
                    </div>
                `;
            });
            html += `</div></div>`;
        }

        if (allVideos.length === 0 && audioList.length === 0) {
            html += `<div style="text-align: center; color: #94a3b8; padding: 20px;">No downloadable streams found</div>`;
        }

        setSafeHTML(modalBody, html);

        modalBody.querySelectorAll(".snapwc-btn-copy").forEach(function (b) {
            b.addEventListener("click", function () {
                var u = b.getAttribute("data-url");
                if (u) copyTextToClipboard(u, b, "📋 Copy");
            });
        });
    }

    var snapwcParseSeq = 0;

    async function startSnapwcParseFlow(targetUrl) {
        // Only the newest parse may paint the panel; switching tabs or reopening
        // the modal used to let an older response overwrite the fresh view.
        var seq = ++snapwcParseSeq;
        function current() { return seq === snapwcParseSeq; }

        renderSnapwcLoading("Connecting to Server 2 API...");

        try {
            var checkRes = await snapwcApiFetch("/api.captcha/is_required", {
                scenario: "parser",
                data: { url: targetUrl }
            }, true);

            if (!current()) return;
            if (checkRes && checkRes.status === true) {
                renderSnapwcLoading("Security check triggered. Loading captcha...");
                var genRes = await snapwcApiFetch("/api.captcha/generate", {}, true);
                if (!current()) return;
                if (genRes && genRes.captcha_image && genRes.captcha_token) {
                    renderSnapwcCaptcha(targetUrl, genRes);
                    return;
                }
            }

            renderSnapwcLoading("Parsing HD media streams and subtitles...");
            var parseData = await snapwcApiFetch("/api.parser/parse", { url: targetUrl }, false);
            if (!current()) return;
            renderSnapwcResults(parseData);

        } catch (err) {
            if (!current()) return;
            if (err && err.code === "CAPTCHA_REQUIRED") {
                renderSnapwcLoading("Security protection triggered. Fetching captcha...");
                try {
                    var gen = await snapwcApiFetch("/api.captcha/generate", {}, true);
                    if (!current()) return;
                    renderSnapwcCaptcha(targetUrl, gen);
                } catch (e2) {
                    if (!current()) return;
                    renderSnapwcError("Failed to load captcha: " + ((e2 && e2.message) || "unknown error"), targetUrl);
                }
            } else {
                renderSnapwcError("Server 2 parsing error: " + ((err && err.message) || "unknown error"), targetUrl);
            }
        }
    }

    // Modal Entrance Handler
    function openDownloadModal(targetUrl, videoEl) {
        currentTargetUrl = targetUrl;
        nativeSourceVideo = videoEl || null;
        // Previously these two survived SPA navigation, so the panel kept showing
        // the previous video's title and thumbnail.
        nativeTitleHint = "";
        currentVideoTitle = "";
        currentVideoThumb = "";
        preferredHeight = 0;
        loaderActiveTasks = {};
        invalidatePageHtml();
        cancelLoaderJobs();
        snapwcParseSeq++;
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
        if (fs) {
            // Inline display wins over the shadow stylesheet, so the button and
            // tooltip are cleared here; the panel is hidden by the :host rule.
            if (btn && btn.style.display !== "none") btn.style.display = "none";
            if (tip && tip.style.display !== "none") tip.style.display = "none";
            activeVideo = null;
        }
        // "html:fullscreen #id" cannot reach across the shadow boundary, so the
        // state lives on the host and the stylesheet keys off :host(.aio-fs).
        if (uiHost && uiHost.classList.contains("aio-fs") !== fs) {
            uiHost.classList.toggle("aio-fs", fs);
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

    // Per-platform selectors used to resolve "the card the pointer is over".
    // closest() on the element under the cursor replaces the old full-document
    // querySelectorAll("video") + getBoundingClientRect() sweep, which forced a
    // layout on every single mousemove event.
    var WRAPPER_SELECTOR = {
        youtube: "ytd-thumbnail, ytd-rich-item-renderer, ytd-grid-video-renderer, ytd-compact-video-renderer, ytd-video-renderer, ytd-reel-item-renderer, ytm-shorts-lockup-view-model, ytm-shorts-lockup-view-model-v2, #movie_player, .html5-video-player, ytd-player",
        twitter: "article",
        instagram: "article",
        facebook: '[role="article"], [data-pagelet]',
        tiktok: "[data-e2e='recommend-list-item-container'], div[class*='DivVideoContainer'], div[class*='DivPlayerContainer']"
    };

    function isVisibleVideo(v) {
        if (!v || !v.getBoundingClientRect) return false;
        var rect = v.getBoundingClientRect();
        if (rect.width <= 50 || rect.height <= 50) return false;
        var st = window.getComputedStyle(v);
        return st.display !== "none" && st.visibility !== "hidden";
    }

    // Single hit test per pointer position: O(depth) instead of O(videos * depth).
    function hitTest(x, y) {
        if (typeof document.elementFromPoint !== "function") return null;
        var el = document.elementFromPoint(x, y);
        if (!el || !el.closest) return null;
        // Anything inside the shadow root is reported as the host itself, so a
        // single identity check replaces the old selector match - the button hit
        // test is done separately from its rect and never reaches this point.
        if (el === uiHost) return null;

        var video = el.closest("video");
        if (video && isVisibleVideo(video)) return video;

        var sel = WRAPPER_SELECTOR[platform];
        if (sel) {
            var wrap = el.closest(sel);
            if (wrap) return wrap;
        }
        return null;
    }

    var hoverRaf = 0;
    var lastHoverRun = 0;
    var lastHitX = -9999;
    var lastHitY = -9999;

    function scheduleHover() {
        if (hoverRaf) return;
        var raf = window.requestAnimationFrame || function (fn) { return setTimeout(fn, 16); };
        hoverRaf = raf(function () {
            hoverRaf = 0;
            var now = Date.now();
            if (now - lastHoverRun < CONFIG.HOVER_THROTTLE_MS) return;
            lastHoverRun = now;
            checkHover();
        });
    }

    function hideButton() {
        btn.style.display = "none";
        tip.style.display = "none";
        btn.classList.remove("tenzaa-hover");
        activeVideo = null;
    }

    function checkHover() {
        if (syncFullscreenState()) return;
        if (mouseX < 0 || mouseY < 0) return;

        // 1. Cheap rect test for the button itself (no page query at all)
        if (btn.style.display === "flex") {
            var btnRect = btn.getBoundingClientRect();
            if (mouseX >= btnRect.left && mouseX <= btnRect.right &&
                mouseY >= btnRect.top && mouseY <= btnRect.bottom) {
                btn.classList.add("tenzaa-hover");
                tip.style.display = "block";
                return;
            }
            btn.classList.remove("tenzaa-hover");
            tip.style.display = "none";
        }

        // 2. Re-hit-test only when the pointer actually moved
        if (activeVideo && Math.abs(mouseX - lastHitX) < 3 && Math.abs(mouseY - lastHitY) < 3) {
            return;
        }
        lastHitX = mouseX;
        lastHitY = mouseY;

        var found = hitTest(mouseX, mouseY);
        if (!found) {
            hideButton();
            return;
        }

        var target = getTargetUrl(found);
        if (!target || target.indexOf("undefined") >= 0) {
            hideButton();
            return;
        }
        activeVideo = found;
        btn.style.display = "flex";
        updateBtnPos();
    }

    window.addEventListener("mousemove", function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        scheduleHover();
    }, { passive: true, capture: true });

    // mousedown is captured so the host page cannot swallow the gesture inside
    // the player; the click handler below is throttled against the same guard.
    var lastTriggerAt = 0;
    function triggerParseOnce() {
        var now = Date.now();
        if (now - lastTriggerAt < 600) return; // mousedown + click double-fire
        lastTriggerAt = now;
        triggerParse();
    }

    window.addEventListener("mousedown", function (e) {
        if (btn.style.display !== "flex") return;
        var rect = btn.getBoundingClientRect();
        if (e.clientX >= rect.left && e.clientX <= rect.right &&
            e.clientY >= rect.top && e.clientY <= rect.bottom) {
            e.preventDefault();
            e.stopPropagation();
            triggerParseOnce();
        }
    }, true);

    btn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        triggerParseOnce();
    });

    window.addEventListener("scroll", function () {
        if (activeVideo && btn.style.display === "flex") updateBtnPos();
    }, { passive: true, capture: true });

    ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"].forEach(function (ev) {
        document.addEventListener(ev, syncFullscreenState, true);
        window.addEventListener(ev, syncFullscreenState, true);
    });

    // The observer target does not exist yet when the script runs on a fresh SPA
    // route, so it is (re)attached on navigation instead of once at load.
    var fsObserver = null;
    function attachFullscreenObserver() {
        try {
            var targetYt = document.querySelector("#movie_player, ytd-watch-flexy, .html5-video-player");
            if (!targetYt) return;
            if (fsObserver) fsObserver.disconnect();
            fsObserver = new MutationObserver(function () { syncFullscreenState(); });
            fsObserver.observe(targetYt, { attributes: true, attributeFilter: ["class", "fullscreen"] });
        } catch (e) {}
    }
    attachFullscreenObserver();
    window.addEventListener("yt-navigate-finish", function () {
        invalidatePageHtml();
        hideButton();
        attachFullscreenObserver();
    }, true);
    window.addEventListener("popstate", function () {
        invalidatePageHtml();
        hideButton();
    }, true);

    // Fallback tick: covers layout shifts that happen without a pointer event
    // (lazy-loaded thumbnails, player resize). Cheap now that checkHover() is O(1).
    setInterval(function () {
        if (document.hidden) return;
        if (syncFullscreenState()) return;
        if (mouseX < 0 || mouseY < 0) return;
        checkHover();
    }, CONFIG.DETECT_INTERVAL_MS);

    function triggerParse() {
        var targetUrl = activeVideo ? getTargetUrl(activeVideo) : cleanUrl(location.href);
        if (!targetUrl || targetUrl.indexOf("undefined") >= 0) return;

        // Keep the SVG node in place: replacing textContent and re-appending it
        // could duplicate the icon on rapid clicks.
        btn.style.transform = "scale(0.92)";
        tip.style.display = "none";

        openDownloadModal(targetUrl, activeVideo);

        setTimeout(function () {
            btn.style.transform = "scale(1)";
        }, 400);
    }
})();
