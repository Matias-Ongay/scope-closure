const myglobal=0;
function myFunction(){
    const number=1;
    console.log(myglobal);
    function parent(){
        const inner=2;
        console.log(number,myglobal);
        function child(){
            console.log(inner,number,myglobal);
        }
        return child();
    }
    return parent();
}
myfunction();