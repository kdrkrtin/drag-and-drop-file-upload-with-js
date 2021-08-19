# Using-drag-drop-with-js
Redirecting and making submitting with jquery. codes are shared. You don't think it will work for you. An existing file in the file, both cheaply obtained from JavaScript.

# Definitions of functions used
- `dragenter` -> Our function that is triggered when a photo or photos enter the area covered by the `<input type="file">` element with the mouse.
- `dragleave` -> Our function that is triggered when a photo or photos leave the area covered by the `<input type="file">` element with the mouse.
- `drop` -> Our functions that are triggered when a photo or photos that are dragged with the mouse are dropped into the area covered by the `<input type="file">` element.
- `change` -> Our function that is triggered when the content of the `<input type="file">` element changes.

Project Screen Shot
![image](https://github.com/kdrkrtin/drag-and-drop-file-upload-with-js/blob/main/drag-and-drop-files.png)

# Drag and Drop with Jquery
 After the "jquery-main.js" script tag is integrated into the "drag-and-drop.html" file, the jquery script tag is also integrated.
  ```yaml
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
    crossorigin="anonymous"></script>
<script src="js/jquery-main.js"></script>
```
 
# Drag and Drop with Native JavaScript
For drag-and-drop operations with Native JavaScript, deactivate the jquery script tag from the "drag-and-drop.html" file, or leave it in the kdo section. It will not have any impact on the project. After integrating, you can open the page in the browser and test.

 ```yaml
/*<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
    crossorigin="anonymous"></script>*/ 
<script src="js/native-javascript-main.js"></script>
```

# General Information
Multiple image uploading and preview work was done by using the "dragenter, dragleave, drop" functions with Native JavaScript and Jquery. In order to trigger the "dragenter, dragleave, drop" functions, an input in the "drag-and-drop.html" file with a "type" value of file and a "multiple" value for multiple selection is required. I tried to drag and drop this input by hiding it with "display: none" but it didn't work. I also set the "opacity" value of the input to "0" with css and spread it by hiding the parent dive with the CSS properties you will see between the "style" tags. In this way, the functions will be triggered when the user drag and drop to the desired location in the specified region.

No recording has been made for the background. If you want, you can perform the necessary registration processes with backend languages ​​such as AJAX or PHP.

I noted next to the relevant code where you can access the files you dragged with JavaScript.

Hopefully it benefits your business. I wish you a nice day.

------------------------------------------------------------

# js-ile-sürükle-bırak-kullanımı
Jquery ile sürükle bırak yaparak görsel yükleme ve önizleme yapma. Gerekli kodlar paylaşılmıştır. İşinize yarayacağını düşünüyorum. Dosya içerisinde hem Native JavaScript hem de Jquery ile sürükle bırak işleminin yapımı mecvut.

# Kullanılan fonksiyonların tanımları
- `dragenter` -> Mouse ile fotoğraf veya fotoğraflar `<input type="file">` elementinin kapsadığı alanına giriş yaptığında tetiklenen fonksiyonumuz.
- `dragleave` -> Mouse ile fotoğraf veya fotoğraflar `<input type="file">` elementinin kapsadığı alanından ayrıldığında tetiklenen fonksiyonumuz.
- `drop`      -> Mouse ile sürüklenen fotoğraf veya fotoğraflarımız `<input type="file">` elementinin kapsadığı alana bırakıldığında tetiklenen fonksiyonlarımız.
- `change`    -> `<input type="file">` elementinin içeriği değiştiği zaman tetiklenen fonksiyonumuz.

Proje Ekran Görüntüsü

# Jquery ile Sürükle Bırak Yapımı
 Jquery ile sürükle bırak işlemleri için aşağıda belirttiğim script etiketlerini aktif etmeniz gerekiyor.
 
 ```yaml
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
    crossorigin="anonymous"></script>
<script src="js/jquery-main.js"></script>
```
 
# Native JavaScript ile Sürükle Bırak Yapımı
Native JavaScript ile sürükle bırak işlemleri için "drag-and-drop.html" dosyasından jquery script etiketini dilerseniz deaktif edin dilerseniz kdo kısmında kalsın. Projeye herhangi bir etkisi olmayacaktır. Entegre ettikten sonra sayfayı tarayıcıda açıp deneme yapabilirsiniz.

 ```yaml
/*<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
    crossorigin="anonymous"></script>*/ 
<script src="js/native-javascript-main.js"></script>
```

# Genel Bilgi
Native JavaScript ve Jquery ile "dragenter, dragleave, drop" fonksiyonlarından faydalanarak çoklu görsel yükleme ve önizleme çalışması yapılmıştır. "dragenter, dragleave, drop" fonksiyonlarının tetiklenmesi için "drag-and-drop.html" dosyasında "type" değeri file olan ve çoklu seçim için "multiple" değerine sahip olan bir input gereklidir. Bu inputu "display: none" ile gizleyerek sürükle bırak işlemini yapmaya çalıştım fakat çalışmadı. Ben de css ile inputun "opacity" değerini "0" a çektim ve "style" etiketleri arasında göreceğiniz CSS özellikleri ile parent dive gizleyerek yaydım. Bu şekilde kullanıcı belirtilen bölgede istediği yere sürükle bırak işlemi yaptığında fonksiyonlar tetiklenecektir.

Arkaplan için herhangi bir kayıt işlemi yapılmamıştır. İsterseniz AJAX ya da PHP gibi backend dilleri ile gerekli kayıt işlemlerinizi gerçekleştirebilirsiniz.

Sürüklediğiniz dosyalara JavaScript ile nereden ulaşacağınızı ilgili kodun yanına not ettim.

Umarım işinize yarar. Güzel günler diliyorum.
