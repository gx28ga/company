
new Vue({
    el : '#APP',
    delimiters: ['${', '}'],
    data : function(){
        return{
            albumPath : '../../../images/other/thank-guest-pc/album/',
            photoCnt : 20,
            index : 1
        }
    },
    mounted : function(){
        /*jQuery(".slideBox").slide({
            mainCell:".bd ul",
            trigger:"click"
        });*/
        this.onNaviAlbum(0);
    },
    methods : {
        onNaviAlbum :function (offset) {
            var photo = document.getElementById('album-photo');
            if (this.index + offset <= 0) {
                    this.index = this.photoCnt;
                } else if(this.index + offset > this.photoCnt) {
                    this.index = 1;
                } else {
                    this.index +=offset;
                }
            photo.setAttribute('src', this.albumPath + (this.index > 9 ? '' : '0') + this.index + '.jpg');
        }
    }
});