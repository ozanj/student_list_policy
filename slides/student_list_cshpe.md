---
title: 'Student list biz'
mode: selfcontained
ext_widgets : {rCharts: [libraries/shiny]}
framework: revealjs
revealjs:
  theme: 'custom'
  transition: 'slide'
  center: 'false'
#bibliography: '../assets/bib/student_list_policy.bib'
#bibliography: '../assets/bib/eepa_student_list.bib'
#csl: '../assets/bib/apa.csl'
bibliography: '../../public_requests_eda/text/bib/eepa_student_list.bib'
csl: '../../public_requests_eda/text/bib/apa.csl'
--- #title







# A Sociological Analysis of Structural Racism in Student List Products

<div id='authors'>
  <div><p>Ozan Jaquette</p><span class='affiliation'>UCLA</span></div>
  <div><p>Karina Salazar</p><span class='affiliation'>University of Arizona</span></div>
  <div><p>Crystal Han</p><span class='affiliation'>Stanford</span></div>
  <div><p>Patrica Martín</p><span class='affiliation'>UCLA</span></div>
</div>


--- .section

# Introduction


---

# College Board Search and student outcomes
## Howell, Hurwitz, Mabel, et al. (2021)


```r
create_cb_figure <- function(categories, values, plot_title, fill_values = rev(color_palette[1:2])) {
  cb_fig_df <- data.frame(
    category = rep(categories, each = 2),
    subcategory = rep(c('Not Licensed', 'Gain from being Licensed'), length(categories)), 
    value = values
  )
  
  cb_fig_df$category <- factor(cb_fig_df$category, levels = categories)
  
  cb_fig_df %>%
    left_join(
      cb_fig_df %>%
        pivot_wider(id_cols = category, names_from = subcategory, values_from = value) %>%
        mutate(
          total = `Not Licensed` + `Gain from being Licensed`,
          pct_change = `Gain from being Licensed` / `Not Licensed` * 100
        ),
      by = 'category') %>% 
    ggplot(aes(x = category, y = value, fill = subcategory, width = 0.6)) +
    geom_bar(position = 'stack', stat = 'identity') +
    geom_text(aes(y = value, label = if_else(subcategory == 'Not Licensed', str_c(sprintf('%.1f', value), '%'), '')), color = color_text, size = 2, position = position_stack(vjust = 0.5)) +
    geom_text(aes(y = total + 3, label = if_else(subcategory == 'Not Licensed', str_c('(', sprintf('%.1f', pct_change), '%)'), '')), color = '#444444', size = 2) +
    geom_text(aes(y = total + 7, label = if_else(subcategory == 'Not Licensed', str_c(sprintf('%.1f', `Gain from being Licensed`), 'pp'), '')), color = '#444444', size = 2) +
    ggtitle(plot_title) +
    xlab('') + ylab('') + 
    scale_y_continuous(expand = expansion(mult = c(0, 0.05)), limits = c(0, 80)) +
    scale_fill_manual(values = fill_values) +
    theme(
        plot.margin = margin(t = 0.6, unit = 'cm'),
        panel.grid.major.y = element_line(size = 0.1, color = 'gray'),
        legend.title = element_blank(),
        legend.position = 'bottom',
        legend.margin = margin(t = -0.5, unit = 'cm'),
        legend.text = element_text(margin = margin(r = 0.2, unit = 'cm'))
      ) +
      guides(fill = guide_legend(reverse = T))
}

grid.arrange(
  create_cb_figure(
    c('Overall', 'Asian', 'Black', 'Hispanic', 'AI/AN', 'HI/PI', 'White'),
    c(32.8, 8.3, 37.5, 5.7, 31.8, 7.8, 24.1, 8.3, 26.5, 6.3, 22.2, 5.8, 44.4, 9.6),
    'Enrollment'
  ),
  create_cb_figure(
    c('Overall', 'Asian', 'Black', 'Hispanic', 'AI/AN', 'White'),
    c(15.7, 4.9, 17.7, 5.0, 7.2, 2.9, 6.7, 2.9, 8.7, 4.2, 24.0, 6.7),
    'BA Completion within 4 Years'
  ),
  create_cb_figure(
    c('Overall', 'No College', 'College,\nNo BA', 'College,\nBA or Higher'),
    c(32.8, 8.3, 24.9, 10.1, 36.5, 11.0, 53.4, 10.1),
    'Enrollment'
  ),
  create_cb_figure(
    c('Overall', 'No College', 'College,\nNo BA', 'College,\nBA or Higher'),
    c(15.7, 4.9, 13.6, 6.8, 21.3, 8.5, 39.9, 10.1),
    'BA Completion within 4 Years'
  ),
  ncol = 2
)
```

```
## Warning in grid.Call(C_textBounds, as.graphicsAnnot(x$label), x$x, x$y, : font family not found in Windows font database

## Warning in grid.Call(C_textBounds, as.graphicsAnnot(x$label), x$x, x$y, : font family not found in Windows font database

## Warning in grid.Call(C_textBounds, as.graphicsAnnot(x$label), x$x, x$y, : font family not found in Windows font database

## Warning in grid.Call(C_textBounds, as.graphicsAnnot(x$label), x$x, x$y, : font family not found in Windows font database

## Warning in grid.Call(C_textBounds, as.graphicsAnnot(x$label), x$x, x$y, : font family not found in Windows font database

## Warning in grid.Call(C_textBounds, as.graphicsAnnot(x$label), x$x, x$y, : font family not found in Windows font database

## Warning in grid.Call(C_textBounds, as.graphicsAnnot(x$label), x$x, x$y, : font family not found in Windows font database

## Warning in grid.Call(C_textBounds, as.graphicsAnnot(x$label), x$x, x$y, : font family not found in Windows font database

## Warning in grid.Call(C_textBounds, as.graphicsAnnot(x$label), x$x, x$y, : font family not found in Windows font database

## Warning in grid.Call(C_textBounds, as.graphicsAnnot(x$label), x$x, x$y, : font family not found in Windows font database

## Warning in grid.Call(C_textBounds, as.graphicsAnnot(x$label), x$x, x$y, : font family not found in Windows font database

## Warning in grid.Call(C_textBounds, as.graphicsAnnot(x$label), x$x, x$y, : font family not found in Windows font database

## Warning in grid.Call(C_textBounds, as.graphicsAnnot(x$label), x$x, x$y, : font family not found in Windows font database

## Warning in grid.Call(C_textBounds, as.graphicsAnnot(x$label), x$x, x$y, : font family not found in Windows font database

## Warning in grid.Call(C_textBounds, as.graphicsAnnot(x$label), x$x, x$y, : font family not found in Windows font database

## Warning in grid.Call(C_textBounds, as.graphicsAnnot(x$label), x$x, x$y, : font family not found in Windows font database

## Warning in grid.Call(C_textBounds, as.graphicsAnnot(x$label), x$x, x$y, : font family not found in Windows font database

## Warning in grid.Call(C_textBounds, as.graphicsAnnot(x$label), x$x, x$y, : font family not found in Windows font database

## Warning in grid.Call(C_textBounds, as.graphicsAnnot(x$label), x$x, x$y, : font family not found in Windows font database

## Warning in grid.Call(C_textBounds, as.graphicsAnnot(x$label), x$x, x$y, : font family not found in Windows font database

## Warning in grid.Call(C_textBounds, as.graphicsAnnot(x$label), x$x, x$y, : font family not found in Windows font database

## Warning in grid.Call(C_textBounds, as.graphicsAnnot(x$label), x$x, x$y, : font family not found in Windows font database

## Warning in grid.Call(C_textBounds, as.graphicsAnnot(x$label), x$x, x$y, : font family not found in Windows font database

## Warning in grid.Call(C_textBounds, as.graphicsAnnot(x$label), x$x, x$y, : font family not found in Windows font database

## Warning in grid.Call(C_textBounds, as.graphicsAnnot(x$label), x$x, x$y, : font family not found in Windows font database

## Warning in grid.Call(C_textBounds, as.graphicsAnnot(x$label), x$x, x$y, : font family not found in Windows font database

## Warning in grid.Call(C_textBounds, as.graphicsAnnot(x$label), x$x, x$y, : font family not found in Windows font database

## Warning in grid.Call(C_textBounds, as.graphicsAnnot(x$label), x$x, x$y, : font family not found in Windows font database

## Warning in grid.Call(C_textBounds, as.graphicsAnnot(x$label), x$x, x$y, : font family not found in Windows font database

## Warning in grid.Call(C_textBounds, as.graphicsAnnot(x$label), x$x, x$y, : font family not found in Windows font database

## Warning in grid.Call(C_textBounds, as.graphicsAnnot(x$label), x$x, x$y, : font family not found in Windows font database

## Warning in grid.Call(C_textBounds, as.graphicsAnnot(x$label), x$x, x$y, : font family not found in Windows font database

## Warning in grid.Call(C_textBounds, as.graphicsAnnot(x$label), x$x, x$y, : font family not found in Windows font database

## Warning in grid.Call(C_textBounds, as.graphicsAnnot(x$label), x$x, x$y, : font family not found in Windows font database

## Warning in grid.Call(C_textBounds, as.graphicsAnnot(x$label), x$x, x$y, : font family not found in Windows font database

## Warning in grid.Call(C_textBounds, as.graphicsAnnot(x$label), x$x, x$y, : font family not found in Windows font database

## Warning in grid.Call(C_textBounds, as.graphicsAnnot(x$label), x$x, x$y, : font family not found in Windows font database

## Warning in grid.Call(C_textBounds, as.graphicsAnnot(x$label), x$x, x$y, : font family not found in Windows font database

## Warning in grid.Call(C_textBounds, as.graphicsAnnot(x$label), x$x, x$y, : font family not found in Windows font database

## Warning in grid.Call(C_textBounds, as.graphicsAnnot(x$label), x$x, x$y, : font family not found in Windows font database

## Warning in grid.Call(C_textBounds, as.graphicsAnnot(x$label), x$x, x$y, : font family not found in Windows font database

## Warning in grid.Call(C_textBounds, as.graphicsAnnot(x$label), x$x, x$y, : font family not found in Windows font database
```

![plot of chunk cb-fig](assets/fig/cb-fig-1.png)


---

## Scholarship on college access

Extant literatures

- Student behavior
- Effects of federal, state, and local policies
- Behavior of schools and postsecondary institutions (PSIs)
  - Scholarship on enrollment management fits here
      - Scholarship on admissions fits here

<br>

Third-party providers (the other for-profit industry)

- Schools and PSIs outsource functions to vendors and consultancies (Jaquette, Salazar, and Martin, 2022; Komljenovic, 2021; Komljenovic, 2022)
- Scholars have not investigated how third-party produces and services structure college access

<br>
Developing a literature about algorithmic products

- Literature at the intersections of access, enrollment management, and edtech
- Analyze products purchased by schools and PSIs
- Analyze the organizations that sell these products



<br>
This study constructs and deconstructs student list products sold by College Board

---

## Structural racism in algorithmic products

Structural racism

- Processes viewed as neutral or common-sense that systematicallyadvantage disadvantage marginalized groups

<br>
Scholarship from critical data studies (e.g., Benjamin, 2019; Noble, 2018) and sociology of race (e.g., Cottom, 2020; Norris, 2021)

- Algorithmic products are not race neutral

<br>
Algorithmic products reproduce/increase racial inequality by utilizing *structurally racist inputs*

- Seemingly neutral inputs that correlate with race because of historical exclusion from this input (e.g., EXAMPLE)

<br>
This study

- **RQ**: What is the relationship between student list search filters (e.g., test score range, zip code) and the characteristics of students who are included vs. excluded by student list purchases?
- Analyze student lists purchased from College Board
- Focus on race and class inequality in which prospects are included/excluded by student list purchases






--- .section

# Background: Student Lists


--- .subsection

# Lists vis-a-vis recruiting

---

## The US market for higher education


A national voucher system
- Tuition revenue: household savings; grants and loans from federal, state, and private sources
- Tuition revenue follows students to Title IV institutions

<br>
Students
- Goal: want to attend college
- Problem: don't know all options, where they would be admitted, how much it will cost

<br>
Universities
- Goal: enroll students to survive and other enrollment goals
- Problem: can't rely solely on students who reach out on their own; don't know the prospects or how to contact them


<br>

Student lists
- A matchmaking intermediary that connects institutions to prospects
- "lead generation"
  - Student lists are an example of list-based leads, based on direct mail
  - As opposed to behavioral-based leads (e.g., ads from Google Search)



--- &twocol

## The enrollment funnel

*** =left

Prospects

- Population of desirable potential students

Leads

- Prospects whose contact info has been obtained

Inquiries

- Prospects who have contacted the institution
  - Institution as first contact (leads)
  - Student as first contact

<br>
Interventions along the funnel

- Convert prospects to leads
  - purchase student lists
- Convert leads/inquiries to applicants
  - Email, mail, targeted social media
- Convert admits to enrolles
  - Financial aid packages

*** =right

<center>**The enrollment funnel**</center>

<br>

<img src="../assets/images/enrollment_funnel.png" alt="Enrollment Funnel" style="width:80%;margin:0 auto;">

Source: [pngwing.com](https://www.pngwing.com/en/free-png-krrpy)

---

# College Board and ACT lists
## Data sources and list contents

College Board and ACT have been largest student list vendors for several decades

- College Board "Student Search Service" created in 1972 (Belkin, 2019)
- ACT "Educational Opportunity Service"
  - ACT acquired National Research Center for College and University (NRCCUA) in 2018
  - Student list products part of new "Encoura Data Lab"

<br>
Source of student list data

- From database of test takers (e.g., PSAT, SAT, AP, PreACT, ACT)
  - Pre-test questionnaire (e.g., demographic, preferences about college)
- More recently, from college search engines (e.g., College Board Big Future)
- Students have opportunity to opt in or opt out of student list products

<br>
Pricing

- Historically, a price-per-prospect model
- ACT moved to subscription pricing with [creation of Encoura](https://encoura.org/combined-data-set/)
- College Board currently charges \$0.50 per name, but [moving to subscription pricing](https://cbsearch.collegeboard.org/pdf/2022-23-subscription-plan-pricing.pdf) too

<br>
What information does a list contain
- Contact, demographic, college preferences, limited academic achievement
- College Board template [HERE](https://drive.google.com/file/d/1Qvc_QRi9izEF1W78Lh4nNi5NsXjCZqUE/view)
- ACT template [HERE](https://drive.google.com/file/d/1rsP45OyOsnPYhV8uWYKDAy_spGhjj6aj/view)


--- 

## Buying student lists

"Search filters" allow universities to control which prospects included/excluded from a purchase

<br>
Commonly used search filters ([Link to ACT filters](https://helpcenter.encoura.org/hc/en-us/articles/360035260452-Prospect-Search-Filters-))

- Graduation year, HS GPA, test score range, gender, race/ethnicity, geography (e.g., state, zip-code, "geomarket"), intended major

<br>

New filters based on predictive analytics to facilitate micro-targeting ("efficient" name buys of "right fit" students)

- College Board "geodemographic" filters
  - Target prospects based on historical college-going behavior of students at the school/neighborhood
- ACT "enrollment predictor"
  - Target prospects based on their predicted probability of enrolling at your institution



--- .subsection

# EM Market dynamics


--- 

## Dynamics shaping the market for student list data


From [The Student List Business: Primer and market dynamics](https://ticas.org/wp-content/uploads/2022/09/The-Student-List-Business_-Primer-and-Market-Dynamics.pdf) (Jaquette, Salazar, and Martin, 2022):


1. **Centrality of enrollment management (EM) consulting firms**
  - Purchase student lists on behalf of universities
  - Names are input to firm predictive models and recruiting interventions
<br>

1. **Competition then concentration**
  - Competition in the 2000s
      - technology >> new sources of student list data (e.g., college search engines; software used by high schools) >> entry by new vendors (e.g., Zinch)
  - Concentration in the 2010s
      - horizontal acquisitions in EM consulting industry (e.g., RuffaloCODY acquires Noel-Levitz)
      - Vertical acquisitions transform market for student list data (e.g., PowerSchool acquires Naviance/Intersect from Hobsons; EAB acquires Cappex)
          - Leverage control over pool of names to sell software-as-service products
<br>

1. **Incumbents College Board and ACT evolve amidst threats**
  - Create new search filters that aid micro-targeting of prospects
  - Leverage names database to sell EM consulting
  - Test-optional threatens competitive advantage in coverage
  - Create/buy college search engines



--- .section

# Literature Review

--- .subsection

# Recruiting

--- 

## Sociological scholarship on recruiting

Enrollment funnel: prospects, leads, inquires, applicants, admits, enrolled
- Most scholarship from sociology of education focuses on latter stages
    - which applicants get admitted  (e.g., Killgore, 2009; Posselt, 2016)
- Growing body of research analyzes recruiting "in the wild"
    
<br>
Recruiting from the perspective of high school students (Holland, 2019)
- Underrepresented students sensitive to feeling "wanted" by colleges

<br>
Connections between colleges and high schools from an organizational perspective

- Off-campus recruiting visits indicate a network tie and enrollment priorities
- Stevens (2007): recruiting from perspective of selective private college
- Khan (2011): recruiting from perspective of private HS guidance counselors
- Recruiting visits by public research universities   (e.g., Salazar, Jaquette, Han, 2021; Salazar, 2022)
    - Prioritize out-of-state visits to wealthy, white schools

<br>
Recruiting at open-access PSIs for adults  (e.g., Cottom, 2017; Posecznick, 2017)
- Cottom (2017): for-profits have enrollment demand in Black/Latinx communities **because** traditional colleges avoid these communities

--- .subsection

# Soc of race

--- 

## Structural racism

text text


--- .section

# Conceptual Framework

--- .section

# Empirics

--- 

## Project overview

Data collection

- Issued public records requests to all public universities in four states (CA, IL, MN, TX)
- Target student list vendors
  - College Board, ACT
- Data collection began February 2020  
  - Seeking student lists purchased from 2016-2020

<br>
For each purchased list, sought two pieces of data

1. "Order summary" specifying search filter criteria ([LINK](https://drive.google.com/file/d/1gPZ-WWw0gdFT7VtzBN3hKLnj2DzoaqnY/view))
1. De-identified prospect-level student list ([LINK](https://drive.google.com/file/d/1Qvc_QRi9izEF1W78Lh4nNi5NsXjCZqUE/view))

<br>
Empirical research questions

1. Which filter criteria were selected in student lists purchases?
1. What are the characteristics of prospects included in student lists purchases?
1. What is the relationship between student list filter criteria and the characteristics of
purchased prospects?

<br>
Partners

- Funded by Joyce Foundation, Kresge Foundation
- Pro bono partnership with four multinational law firms

--- .section

# Discussion


--- #references

# References
## &nbsp;

<p><a id='bib-belkin2019-studata'></a><a href="#cite-belkin2019-studata">[1]</a><cite>
D. Belkin.
&ldquo;For sale: SAT-Takers' names. Colleges buy student data and boost exclusivity&rdquo;.
In: <em>The Wall Street Journal</em> (Nov. 2019).
URL: <a href="https://www.wsj.com/articles/for-sale-sat-takers-names-colleges-buy-student-data-and-boost-exclusivity-11572976621">https://www.wsj.com/articles/for-sale-sat-takers-names-colleges-buy-student-data-and-boost-exclusivity-11572976621</a>.</cite></p>

<p><a id='bib-RN4775'></a><a href="#cite-RN4775">[2]</a><cite>
R. Benjamin.
<em>Race after technology: Abolitionist tools for the new Jim code</em>.
Medford, MA: Polity, 2019, p. pages cm.
ISBN: 9781509526390 (hardback)
9781509526406 (paperback).</cite></p>

<p><a id='bib-RN4774'></a><a href="#cite-RN4774">[3]</a><cite>
T. M. Cottom.
&ldquo;Where platform capitalism and racial capitalism meet: The sociology of race and racism in the digital society&rdquo;.
In: <em>Sociology of Race and Ethnicity</em> 6.4 (2020), pp. 441-449.
ISSN: 2332-6492.
DOI: <a href="https://doi.org/10.1177/2332649220949473">10.1177/2332649220949473</a>.
URL: <a href="https://doi.org/10.1177/2332649220949473">https://doi.org/10.1177/2332649220949473</a>.</cite></p>

<p><a id='bib-RN4739'></a><a href="#cite-RN4739">[4]</a><cite>
J. Howell, M. H. Hurwitz, Z. Mabel, et al.
<em>Participation in student search service is associated with higher college enrollment and completion</em>.
Tech. rep.
College Board, 2021.
URL: <a href="https://cbsearch.collegeboard.org/pdf/college-outreach-and-student-outcomes.pdf">https://cbsearch.collegeboard.org/pdf/college-outreach-and-student-outcomes.pdf</a>.</cite></p>

<p><a id='bib-list_biz'></a><a href="#cite-list_biz">[5]</a><cite>
O. Jaquette, K. Salazar, and P. Martin.
<em>The student list business: Primer and market dynamics</em>.
Tech. rep.
washington, DC: TICAS, 2022.
URL: <a href="https://ticas.org/wp-content/uploads/2022/09/The-Student-List-Business_-Primer-and-Market-Dynamics.pdf">https://ticas.org/wp-content/uploads/2022/09/The-Student-List-Business_-Primer-and-Market-Dynamics.pdf</a>.</cite></p>

<p><a id='bib-RN4815'></a><a href="#cite-RN4815">[6]</a><cite>
J. Komljenovic.
&ldquo;The future of value in digitalised higher education: why data privacy should not be our biggest concern&rdquo;.
In: <em>Higher Education</em> 83.1 (2022), pp. 119-135.
ISSN: 1573-174X.
DOI: <a href="https://doi.org/10.1007/s10734-020-00639-7">10.1007/s10734-020-00639-7</a>.
URL: <a href="https://doi.org/10.1007/s10734-020-00639-7">https://doi.org/10.1007/s10734-020-00639-7</a>.</cite></p>

<p><a id='bib-RN4793'></a><a href="#cite-RN4793">[7]</a><cite>
J. Komljenovic.
&ldquo;The rise of education rentiers: digital platforms, digital data and rents&rdquo;.
In: <em>Learning Media and Technology</em> 46.3 (2021), pp. 320-332.
ISSN: 1743-9884.
DOI: <a href="https://doi.org/10.1080/17439884.2021.1891422">10.1080/17439884.2021.1891422</a>.
URL: <a href="%3CGo%20to%20ISI%3E://WOS:000620464000001">&lt;Go to ISI&gt;://WOS:000620464000001</a>.</cite></p>

<p><a id='bib-RN4772'></a><a href="#cite-RN4772">[8]</a><cite>
S. U. Noble.
<em>Algorithms of oppression: how search engines reinforce racism</em>.
New York: New York University Press, 2018.
ISBN: 9781479849949 (cl alk. paper)
9781479837243 (pb alk. paper).</cite></p>

<p><a id='bib-RN4786'></a><a href="#cite-RN4786">[9]</a><cite>
D. Norris.
&ldquo;Embedding rrcism: City government credit ratings and the institutionalization of race in markets&rdquo;.
In: <em>Social Problems</em> (2021).
ISSN: 0037-7791.
DOI: <a href="https://doi.org/10.1093/socpro/spab066">10.1093/socpro/spab066</a>.
URL: <a href="https://doi.org/10.1093/socpro/spab066">https://doi.org/10.1093/socpro/spab066</a>.</cite></p>
