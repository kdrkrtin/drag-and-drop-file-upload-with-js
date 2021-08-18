# js-ile-drag-and-drop-kullanımı
Jquery ile sürükle bırak yaparak görsel yükleme ve önizleme yapma. Gerekli kodlar paylaşılmıştır. İşinize yarayacağını düşünüyorum. Dosya içerisinde hem Native JavaScript hem de Jquery ile sürükle bırak işleminin yapımı mecvut.

# Jquery ile Sürükle Bırak Yapımı
 "jquery-main.js" dosyasını script etiketi ile "drag-and-drop.html" dosyasına entegre ettikten sonra  jquery script etiketini de entegre etmelisiniz.
 
# Native JavaScript ile Sürükle Bırak Yapımı
"native-javascript-main.js" dosyasını script etiketi ile "drag-and-drop.html" entegre ettikten sonra sayfayı tarayıcıda açıp deneme yapabilirsiniz.

# Genel Bilgi
Native JavaScript ve Jquery ile "dragenter, dragleave, drop" fonksiyonlarından faydalanarak çoklu görsel yükleme ve önizleme çalışması yapılmıştır. "dragenter, dragleave, drop" fonksiyonlarının tetiklenmesi için "drag-and-drop.html" dosyasında "type" değeri file olan ve çoklu seçim için "multiple" değerine sahip olan bir input gereklidir. Bu inputu "display: none" ile gizleyerek sürükle bırak işlemini yapmaya çalıştım fakat çalışmadı. Ben de css ile inputun "opacity" değerini "0" a çektim ve "style" etiketleri arasında göreceğiniz CSS özellikleri ile parent dive gizleyerek yaydım. Bu şekilde kullanıcı belirtilen bölgede istediği yere sürükle bırak işlemi yaptığında fonksiyonlar tetiklenecektir.

Arkaplan için herhangi bir kayıt işlemi yapılmamıştır. İsterseniz AJAX ya da PHP gibi backend dilleri ile gerekli kayıt işlemlerinizi gerçekleştirebilirsiniz.

Sürüklediğiniz dosyalara JavaScript ile nereden ulaşacağınızı ilgili kodun yanına not ettim.

Umarım işinize yarar. Güzel günler diliyorum.
