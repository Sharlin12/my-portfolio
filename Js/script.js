var typed=new Typed(".typing",{
    strings:["Student.","Developer."],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})
$(".animated-progress span").each(function () {
    $(this).animate(
      {
        width: $(this).attr("data-progress") + "%",
      },
      1000
    );
    $(this).text($(this).attr("data-progress") + "%");
  });