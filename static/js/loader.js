//显示加载动画
$(".gif").css("display", "flex");
//调用ajax发送请求
esdpec.framework.core.getJsonResult('common/getalarmtree', function (res) {
    //请求成功后再次隐藏加载动画
    $(".gif").css("display", "none");
})
