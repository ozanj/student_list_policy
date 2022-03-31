$(function() {
  
  var sections = Array.from($('.section h1,.subsection h1,.subsubsection h1,.subsubsubsection h1').map(function() {
    return {
      'text': this.outerText,
      'slide': this.parentElement.id,
      'level': (Array.from(this.parentElement.classList).find(function(curr) {
        return curr.indexOf('section') !== -1;
      }).match(/sub/g) || []).length + 1
    }
  }));
  
  console.log(sections);
  
  var toc = [],
      item = {};
  
  sections.forEach(function(curr, idx) {
    
    if (item.text !== curr.text || item.level !== curr.level) {
      if (item.text !== undefined) toc.push(Object.assign({}, item));
      
      item.level = curr.level;
      item.text = curr.text;
      item.slide = [];
    }
    
    item.slide.push(curr.slide);
    
    if (idx === sections.length - 1) {
      toc.push(Object.assign({}, item));
    }
  });
  
  console.log(toc);
  
  var html = '',
      level = 1;
  
  toc.forEach(function(curr) {
    if (curr.level > level) {
      html += '<ul>';
    } else if (curr.level < level) {
      html += '</ul>';
    }
    
    html += '<li data-section="' + curr.slide.join(' ') + '"';
    
    if (curr.slide.indexOf(window.location.hash.slice(2)) !== -1) {
      html += ' class="active"';
    }
    
    html += '><a href="#/' + curr.slide[0] + '">' + curr.text + '</a></li>';
    
    level = curr.level;
  })

  $('.section-nav ul').html(html);
  
  function hideNav(currSlide) {
    var sectionSlides = Array.from($('.reveal .slides .section').map(function() {
      return parseInt(this.id.match(/\d+/g));
    }));
    
    var currSlide = parseInt(currSlide.match(/\d+/g));
    
    for (var idx = 0; idx < sectionSlides.length; idx++) {
      if (currSlide > sectionSlides[idx] && (currSlide < sectionSlides[idx + 1] || sectionSlides[idx + 1] === undefined)) {
        $('.section-nav li[data-section="slide-' + sectionSlides[idx] + '"]').next().addClass('active');
      }
    }
  }
  
  hideNav(window.location.hash);
  
  Reveal.addEventListener('slidechanged', function(e) {
    $('.section-nav li').removeClass('active');
    $('.section-nav li[data-section~="' + e.currentSlide.id + '"]').addClass('active');
    
    $('.reveal .section-nav > ul > ul').removeClass('active');
    hideNav(e.currentSlide.id);
  });
  
});
