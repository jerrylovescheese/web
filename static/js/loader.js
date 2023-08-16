// //显示加载动画
// $(".gif").css("display", "flex");
// //调用ajax发送请求
// esdpec.framework.core.getJsonResult('common/getalarmtree', function (res) {
//     //请求成功后再次隐藏加载动画
//     $(".gif").css("display", "none");
// })
setTimeout(() => {
    const box = document.getElementById('fa-3x');

    // 👇️ removes element from DOM
    box.style.display = 'none';

    // 👇️ hides element (still takes up space on page)
    // box.style.visibility = 'hidden';
}, 1300); // 👈️ time in milliseconds
