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

No recording has been made for the background. If you want, you can perform the necessary registration processes with backend languages ??????such as AJAX or PHP.

I noted next to the relevant code where you can access the files you dragged with JavaScript.

Hopefully it benefits your business. I wish you a nice day.

------------------------------------------------------------

# js-ile-s??r??kle-b??rak-kullan??m??
Jquery ile s??r??kle b??rak yaparak g??rsel y??kleme ve ??nizleme yapma. Gerekli kodlar payla????lm????t??r. ????inize yarayaca????n?? d??????n??yorum. Dosya i??erisinde hem Native JavaScript hem de Jquery ile s??r??kle b??rak i??leminin yap??m?? mecvut.

# Kullan??lan fonksiyonlar??n tan??mlar??
- `dragenter` -> Mouse ile foto??raf veya foto??raflar `<input type="file">` elementinin kapsad?????? alan??na giri?? yapt??????nda tetiklenen fonksiyonumuz.
- `dragleave` -> Mouse ile foto??raf veya foto??raflar `<input type="file">` elementinin kapsad?????? alan??ndan ayr??ld??????nda tetiklenen fonksiyonumuz.
- `drop`      -> Mouse ile s??r??klenen foto??raf veya foto??raflar??m??z `<input type="file">` elementinin kapsad?????? alana b??rak??ld??????nda tetiklenen fonksiyonlar??m??z.
- `change`    -> `<input type="file">` elementinin i??eri??i de??i??ti??i zaman tetiklenen fonksiyonumuz.

Proje Ekran G??r??nt??s??

# Jquery ile S??r??kle B??rak Yap??m??
 Jquery ile s??r??kle b??rak i??lemleri i??in a??a????da belirtti??im script etiketlerini aktif etmeniz gerekiyor.
 
 ```yaml
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
    crossorigin="anonymous"></script>
<script src="js/jquery-main.js"></script>
```
 
# Native JavaScript ile S??r??kle B??rak Yap??m??
Native JavaScript ile s??r??kle b??rak i??lemleri i??in "drag-and-drop.html" dosyas??ndan jquery script etiketini dilerseniz deaktif edin dilerseniz kdo k??sm??nda kals??n. Projeye herhangi bir etkisi olmayacakt??r. Entegre ettikten sonra sayfay?? taray??c??da a????p deneme yapabilirsiniz.

 ```yaml
/*<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
    crossorigin="anonymous"></script>*/ 
<script src="js/native-javascript-main.js"></script>
```

# Genel Bilgi
Native JavaScript ve Jquery ile "dragenter, dragleave, drop" fonksiyonlar??ndan faydalanarak ??oklu g??rsel y??kleme ve ??nizleme ??al????mas?? yap??lm????t??r. "dragenter, dragleave, drop" fonksiyonlar??n??n tetiklenmesi i??in "drag-and-drop.html" dosyas??nda "type" de??eri file olan ve ??oklu se??im i??in "multiple" de??erine sahip olan bir input gereklidir. Bu inputu "display: none" ile gizleyerek s??r??kle b??rak i??lemini yapmaya ??al????t??m fakat ??al????mad??. Ben de css ile inputun "opacity" de??erini "0" a ??ektim ve "style" etiketleri aras??nda g??rece??iniz CSS ??zellikleri ile parent dive gizleyerek yayd??m. Bu ??ekilde kullan??c?? belirtilen b??lgede istedi??i yere s??r??kle b??rak i??lemi yapt??????nda fonksiyonlar tetiklenecektir.

Arkaplan i??in herhangi bir kay??t i??lemi yap??lmam????t??r. ??sterseniz AJAX ya da PHP gibi backend dilleri ile gerekli kay??t i??lemlerinizi ger??ekle??tirebilirsiniz.

S??r??kledi??iniz dosyalara JavaScript ile nereden ula??aca????n??z?? ilgili kodun yan??na not ettim.

Umar??m i??inize yarar. G??zel g??nler diliyorum.
