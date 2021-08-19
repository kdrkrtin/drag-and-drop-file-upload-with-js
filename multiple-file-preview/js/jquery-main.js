$(document).ready(function () {
    $('#drag-and-drop-zone').bind({
        dragenter: function (e) {
            e.preventDefault();
            e.stopPropagation();
            $(this).addClass('drag-active');
        },
        dragleave: function (e) {
            e.preventDefault();
            e.stopPropagation();
            $(this).removeClass('drag-active');
        },
        drop: function (e) {
            if (e.originalEvent.dataTransfer && e.originalEvent.dataTransfer.files.length) {
                e.preventDefault();
                e.stopPropagation();
                /*UPLOAD FILES HERE*/
                upload(e.originalEvent.dataTransfer.files);
                $(this).removeClass('drag-active');
            } else {
                console.log('Görseller Yüklenemedi...');
            }
        }
    });
    $('input#files').change(function(){
        upload(this.files);
    })

    //Sürüklenen dosyalara bu fonksiyon içerisine iletişmiş olan 'files' parametresi ile ulaşabilirsiniz
    var preview = $('#preview');
    function upload(files) {
        if (files) {
            console.log(files);
            [].forEach.call(files, readAndPreview);
        }
        function readAndPreview(file) {
            // Yüklenen dosyaların uzantısına göre işlemlerde yapabilirsiniz.
            if (!/\.(jpe?g|png|gif)$/i.test(file.name)) {
                return alert(`${file.name}` + " uygun formatta bir dosya değil! Tekrar Deneyiniz.");
            } else {
                var reader = new FileReader();
                reader.addEventListener("load", function () {
                    preview.prepend(`
                        <div class="wd-drop-item">
                            <div class="wd-bg">
                                <img src="` + this.result + `" title="` + file.name + `">
                            </div>
                        </div>
                    `);
                });
                reader.readAsDataURL(file);
            }
        }
    }
})