function Shaip(kind){
    this.kind=kind
    Shaip.prototype=function(){
        return 6+145
    }
}
function sercl(){
    Shaip.call(this,kind)  //=>بهترین روش برای ارث بردن هر کدام از خصیصه های که در یک شی دیگر وجود دارد و میخواهیم از ان استفائه کنیم
    this.mame="mahmod";

}
sercl.prototype=Object.create(Shaip.prototype)


const cuntery=(cn)=>{
            fetch(`https://restcountries.eu/rest/v2/name/${cn}`).then(respons=>{
                console.log(respons)
                return respons.json()
                if(respons.status===404){
                    throw new error("صفحه مورد نظر شما یافت نشد");
                }
            }).then(data=>{
                    var x=data[0].flag;
                    if(!data)
                    throw new Error(" داده از سرور دریافت  نشد ");
            }).catch(err=>{

            }).finally{
                console.log("سرت سلامت گل من")
            }
}
var respons=new XMLHttpRequest()
respons.open("GET","https://restcountries.eu/rest/v2/name/");
respons.send();
respons.addEventListener('load',function(){
     const data=JSON.parse(this.response
        )

})
