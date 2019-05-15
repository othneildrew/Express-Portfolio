$(document).foundation()

// Show animated photo on project thumbnail hover
$('.thumbnail')
  .mouseenter(function() {
    let animatedSrc = $(this).attr('src').replace('.png', '.gif');
    $(this).attr('src', animatedSrc);
  })
  .mouseleave(function() {
    let mainSrc = $(this).attr('src').replace('.gif', '.png');
    $(this).attr('src', mainSrc);
  });
