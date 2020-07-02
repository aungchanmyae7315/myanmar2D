import Vuex from 'vuex'


const createStore = () => {
    return new Vuex.Store({
        
        state: {
            isLoggedIn: false,
            check_btn:false,
            Otp: '',
            phoneResponse:'',
            getBet:'',
            updateLang:true,
            locales: ['en', 'uni','zg','zh'],
            locale: 'uni',
            token:'',
            file:'',
            webAppVersion:'',
            sliderImage:[],
            sliderText:''
        
        },
        getters: {
          
        },
        mutations: {
            setWebAppVersion(state, version){
                state.webAppVersion = version;
            },
            setSliderImage(state, sliderImage){
                state.sliderImage = sliderImage;
            },
            setSliderText(state, sliderText){
                state.sliderText = sliderText;
            },
            SET_LANG(state, locale) {
                if (state.locales.indexOf(locale) !== -1) {
                  state.locale = locale
                  localStorage.setItem('locale', locale);
                }
              },

            logIn(state, userInfo) {
                //console.log("UserInfo", userInfo);
                // state.userInfo = userInfo;
                localStorage.setItem('userInfo',userInfo);
                state.isLoggedIn = true;
                
            },
           
         
           
            updateIsLoggedIn(state, isLoggedIn) {
                state.isLoggedIn = isLoggedIn;
            },
            updateLang(state, updateLang) {
                state.updateLang = updateLang;
            },
           
            
           
         
          
           
        }
    })
}

export default createStore;










