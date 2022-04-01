$(function() {
  
  var levels = [0, 0, 0, 0],
      currLevel = 0,
      currTitle = '';
  
  var sections = [];
  
  Array.from($('.section h1,.subsection h1,.subsubsection h1,.subsubsubsection h1').map(function() {
    return this;
  })).forEach(function(curr) {
    
    var level = (Array.from(curr.parentElement.classList).find(function(s) {
      return s.indexOf('section') !== -1;
    }).match(/sub/g) || []).length + 1;
    
    if (level < currLevel) {
      for (var i = level; i < levels.length; i++) {
        levels[i] = 0;
      }
    } 
    
    if (curr.outerText !== currTitle) {
      levels[level - 1] += 1;
      currLevel = level;
    }
    
    currTitle = curr.outerText;
    
    sections.push({
      'num': levels.slice(0, level).join('.'),
      'text': curr.outerText,
      'slide': curr.parentElement.id,
      'level': level
    })
  })
  
  console.log(sections);
  
  var toc = [],
      item = {};
  
  sections.forEach(function(curr, idx) {
    
    $('#' + curr.slide + ' h1').prepend(curr.num + ' ')
    
    if (item.text !== curr.text || item.level !== curr.level) {
      if (item.text !== undefined) toc.push(Object.assign({}, item));
      
      item.num = curr.num;
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
      html += '<ul>'.repeat(curr.level - level);
    } else if (curr.level < level) {
      html += '</ul>'.repeat(level - curr.level);
    }
    
    html += '<li data-section="' + curr.slide.join(' ') + '"';
    
    if (curr.slide.indexOf(window.location.hash.slice(2)) !== -1) {
      html += ' class="active"';
    }
    
    html += '><a href="#/' + curr.slide[0] + '">' + curr.num + ' ' + curr.text + '</a></li>';
    
    level = curr.level;
  })

  $('.section-nav ul').html(html);
  
  var sectionSlides = Array.from($('.reveal .slides .section').map(function() {
    return {
      id: parseInt(this.id.match(/\d+/g)),
      text: this.children[2].innerText,
    }
  }));
  
  function hideNav(currSlide) {
    var currSlide = parseInt(currSlide.match(/\d+/g));
    
    for (var idx = 0; idx < sectionSlides.length; idx++) {
      if (currSlide >= sectionSlides[idx].id && (sectionSlides[idx + 1] === undefined || currSlide < sectionSlides[idx + 1].id)) {
        $('.section-nav li[data-section="slide-' + sectionSlides[idx].id + '"]').addClass('active-parent');
        $('.section-nav li[data-section="slide-' + sectionSlides[idx].id + '"]').next().addClass('active');
      }
    }
  }
  
  hideNav(window.location.hash);
  
  Reveal.addEventListener('slidechanged', function(e) {
    
    $('.section-nav li').removeClass('active');
    $('.section-nav li[data-section~="' + e.currentSlide.id + '"]').addClass('active');
    
    $('.reveal .section-nav > ul').removeClass('active-parent');
    $('.reveal .section-nav > ul > ul').removeClass('active');
    hideNav(e.currentSlide.id);
    
  });
  
  console.log(sectionSlides);
  
  Array.from($('.reveal .slides .subsection').map(function() {
    return parseInt(this.id.match(/\d+/g));
  })).forEach(function(currSlide) {
    for (var idx = 0; idx < sectionSlides.length; idx++) {
      if (currSlide >= sectionSlides[idx].id && (sectionSlides[idx + 1] === undefined || currSlide < sectionSlides[idx + 1].id)) {
        $('#slide-' + currSlide + ' h1').after('<h2>' + sectionSlides[idx].text + '</h2>');
      }
    }
  });
  
});
