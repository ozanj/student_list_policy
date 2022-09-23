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
bibliography: '../assets/bib/eepa_student_list.bib'
csl: '../assets/bib/apa.csl'
#bibliography: '../../public_requests_eda/text/bib/eepa_student_list.bib'
#csl: '../../public_requests_eda/text/bib/apa.csl'
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

<img src="assets/fig/cb-fig-1.png" alt="plot of chunk cb-fig" width="90%" />


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


From [The Student List Business: Primer and market dynamics](https://ticas.org/wp-content/uploads/2022/09/The-Student-List-Business_-Primer-and-Market-Dynamics.pdf) (Jaquette, Salazar, and Martin, 2022)

<br>

1. **Centrality of enrollment management (EM) consulting firms**
  - Purchase student lists on behalf of universities
  - Names are input to firm predictive models and recruiting interventions
<br>

1. **Competition then concentration**
  - Competition in the 2000s
      - new technology yields new sources of student list data (e.g., college search engines; software used by high schools)
      - entry by new vendors (e.g., Zinch)
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
- Pro bono partnership with a civil rights legal organization and four multinational law firms
- Our first report to be published by [ACCEPT](https://www.acceptgroup.org/)



# Literature Review

--- .section

# Conceptual Framework

--- .section

# Empirics

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

<p><a id='bib-bradley_2021'></a><a href="#cite-bradley_2021">[2]</a><cite>
B. Bradley.
&ldquo;Pace of mergers and acquisitions in education market jumps, new analysis finds&rdquo;.
In: <em>Edweek Market Brief</em> (Jul. 2021).
URL: <a href="https://marketbrief.edweek.org/marketplace-k-12/pace-mergers-acquisitions-education-market-jumps-new-analysis-finds/">https://marketbrief.edweek.org/marketplace-k-12/pace-mergers-acquisitions-education-market-jumps-new-analysis-finds/</a>.</cite></p>

<p><a id='bib-RN4728'></a><a href="#cite-RN4728">[3]</a><cite>
EAB.
<em>Making your digital ads count: 15 lessons on new and emerging techniques in undergraduate recruitment marketing</em>.
Tech. rep.
EAB, 2018.</cite></p>

<p><a id='bib-ftc2016'></a><a href="#cite-ftc2016">[4]</a><cite>
Federal Trade Commission.
<em><em>&quot;Follow the lead&quot; workshop</em></em>.
Sep. 2016.
URL: <a href="http://www.ftc.gov/system/files/documents/reports/staff-perspective-follow-lead/staff_perspective_follow_the_lead_workshop.pdf">http://www.ftc.gov/system/files/documents/reports/staff-perspective-follow-lead/staff_perspective_follow_the_lead_workshop.pdf</a>.</cite></p>

<p><a id='bib-RN4739'></a><a href="#cite-RN4739">[5]</a><cite>
J. Howell, M. H. Hurwitz, Z. Mabel, et al.
<em>Participation in student search service is associated with higher college enrollment and completion</em>.
Tech. rep.
College Board, 2021.
URL: <a href="https://cbsearch.collegeboard.org/pdf/college-outreach-and-student-outcomes.pdf">https://cbsearch.collegeboard.org/pdf/college-outreach-and-student-outcomes.pdf</a>.</cite></p>

<p><a id='bib-rogers_2014'></a><a href="#cite-rogers_2014">[6]</a><cite>
G. Rogers.
<em><em>Are we seeing an edu &quot;vendor shakeout&quot;?</em></em>.
Dec. 2014.
URL: <a href="https://www.linkedin.com/pulse/we-seeking-edu-vendor-shakeout-gil-rogers?trk=mp-reader-card">https://www.linkedin.com/pulse/we-seeking-edu-vendor-shakeout-gil-rogers?trk=mp-reader-card</a>.</cite></p>

<p><a id='bib-wan_2021'></a><a href="#cite-wan_2021">[7]</a><cite>
T. Wan.
<em><em>Hobsons' higher ed business split and sold in separate deals totaling \$410m</em></em>.
Feb. 2021.
URL: <a href="https://www.edsurge.com/news/2021-02-20-hobsons-higher-ed-business-split-and-sold-in-separate-deals-totaling-410m">https://www.edsurge.com/news/2021-02-20-hobsons-higher-ed-business-split-and-sold-in-separate-deals-totaling-410m</a>.</cite></p>
