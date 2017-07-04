$('body').click(function (event) {
    $(event.target).addClass('clicked');
});

//selectors----------------------------------------------------------------
$slide=$('.clr');
//class for visible slides is vis
$leftbtn=$('span:nth-child(1)');
$rightbtn=$('span:nth-child(2)');
$margin=Number($('.vis').css('margin-left').split('px')[0])
        +Number($('.vis').css('margin-right').split('px')[0])
        +4;

//data of time------------------------------------------------------------
const _time=1000;

//functions---------------------------------------------------------------
var vis=$('._slider>.vis'), grpmem=vis.last().index()+1;
$('._slider').width((vis.width()+$margin)*(grpmem));
console.log($margin);
function moveL( index ,$this) {
    setTimeout(function () {
        $this.addClass('vis');
    },(index)*_time);
};
function moveR(index ,$this) {
    setTimeout(function () {
        $this.removeClass('vis');
    },(index)*_time);
}
function checkb4($vis,$where){
    var num=Math.abs($where.index()-$vis.index());
    if(num>grpmem){
        return grpmem;
    }
    return num;
}

$leftbtn.click(function () {
    var $vis=$('._slider>.vis');
    $vis.last().nextAll().slice(0,grpmem)
        .each(function(index){
            moveL(index,$(this));
        });
    $vis.slice(0,checkb4($vis.last(),$slide.last()))
        .each(function ( index ) {
            moveR(index,$(this));
        });
});
$rightbtn.click(function () {
    var $vis=$('._slider>.vis');
    num=checkb4($vis.first(),$slide.first());
    $vis.first().prevAll().slice(0,num)
        .each(function ( index ) {
            moveL(index,$(this));
        });
    $('.vis:nth-child(n+'+(grpmem+1)+')')
        .each(function ( index ) {
            moveR(num-index-1,$(this));
        });
});
