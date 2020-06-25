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
                localStorage.setItem('userInfo', JSON.stringify(userInfo));
                state.isLoggedIn = true;
                
            },
            accessToken(state, token) {
                // console.log("Token", token);
                 state.token = token;

                localStorage.setItem('token', (token));
            
                
            },
            noti_id(state, data) {
                // console.log("Token", token);
                state.data = data;
                localStorage.setItem('notification_id', (data));
            
                
            },
            promotion_id(state, data) {
                // console.log("Token", token);
                state.data = data;
                localStorage.setItem('promotion_id', (data));  
            },
            bet_date(state, data) {
                state.data = data;
                localStorage.setItem('bet_date', (data));
             
            },
            logOut(state) {
                localStorage.removeItem('userInfo');
                localStorage.removeItem('phoneResponse');
                localStorage.removeItem('token');
                state.isLoggedIn = false;
            },
            updateIsLoggedIn(state, isLoggedIn) {
                state.isLoggedIn = isLoggedIn;
            },
            updateLang(state, updateLang) {
                state.updateLang = updateLang;
            },
           
            
            setOtp(state, Otp){
                state.Otp = Otp;
                //console.log(Otp)
            },
            error_mes(state, Otp){
                state.Otp = Otp;
                //console.log(Otp)
            },

            setPhone(state, phoneResponse){
                state.phoneResponse = phoneResponse;
                //console.log(phoneResponse.access_token)
            },
            getBet(state, check_btn){
                localStorage.setItem('check_btn', check_btn);
                state.check_btn = check_btn;
                //console.log(check_btn)
            },
            getBetThreeD(state, bet_number) {
                localStorage.setItem('bet_numberThreeD', bet_number);
                state.bet_number = bet_number;
            },
            betAmount(state, bet_amount){
                localStorage.setItem('bet_amount', bet_amount);
                state.bet_amount = bet_amount;
                //console.log(bet_amount)
            },
            betAmountThreeD(state, amountThreeD){
                localStorage.setItem('amountThreeD', amountThreeD);
                state.amountThreeD = amountThreeD;
            },
            file(state, file){
                //localStorage.setItem('file',file);
                state.file = file;
                //console.log(check_btn)
            },
            axiosError(state, error){
                localStorage.setItem('axiosRequestError', error);
                state.error = error;
            },
            userId(state, user_id){
                localStorage.setItem('UserID', user_id);
                state.user_id = user_id;
            },
            topup_detail_id(state, data) {
                state.data = data;
                localStorage.setItem('topup_detail_id', (data));  
            },
            withdrawl_detail_id(state, data) {
                state.data = data;
                localStorage.setItem('withdrawl_detail_id', (data));  
            },
           
        }
    })
}

export default createStore;










