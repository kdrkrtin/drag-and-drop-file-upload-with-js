document.addEventListener('readystatechange', function () {
    if (this.readyState == 'complete') {
        var dragAndDrop = document.getElementById('drag-and-drop-zone');
        dragAndDrop.addEventListener('dragenter', function (e) {
            e.preventDefault();
            e.stopPropagation();
            dragAndDrop.classList.add('drag-active');
        })
        dragAndDrop.addEventListener('dragleave', function (e) {
            e.preventDefault();
            e.stopPropagation();
            dragAndDrop.classList.remove('drag-active');
        });
        dragAndDrop.addEventListener('drop', function (e) {
            console.log(e)
            if (e.dataTransfer && e.dataTransfer.files.length) {
                e.preventDefault();
                e.stopPropagation();
                upload(e.dataTransfer.files);
                dragAndDrop.classList.remove('drag-active');
            } else {
                console.log('Görseller Yüklenemedi...');
            }
        });

        //Sürüklenen dosyalara bu fonksiyon içerisine iletişmiş olan 'files' parametresi ile ulaşabilirsiniz
        function upload(files) {
            var preview = document.getElementById('preview');

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
                        var image = new Image();
                        image.title = file.name;
                        image.src = this.result;
                        image.style = 'height: 100px; margin-right: 5px';
                        preview.appendChild(image);
                    });
                    reader.readAsDataURL(file);
                }
            }
        }
    }
})