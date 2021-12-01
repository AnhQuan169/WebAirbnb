const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const headerUserInfoBtn = $('.header__user-icon');
const headerUserPerson = $('.header__user-person');

const app = {

    render: function () {
        
    },

    handleEvents: function () {
        const _this=this;

        headerUserInfoBtn.onclick = function (e) {
            if(headerUserInfoBtn){
                _this.hdUserInfo();
            }
            else{
                !_this.hdUserInfo();
            }
        };
    },

    //Xử lí hiện thị khung user info 
    hdUserInfo: function () {
        
        if(headerUserPerson.style.display === 'block'){
            headerUserPerson.style.display = 'none';
        }
        else{
            headerUserPerson.style.display = 'block';
        }
    },

    start: function(){

        this.render();
        //Lắng nghe xử lí các sự kiện
        this.handleEvents();
        if(!headerUserInfo){
            headerUserPerson.style.display = 'none';
        }
    }
};
app.start();