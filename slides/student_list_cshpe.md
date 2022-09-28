---
title: 'Student list business'
mode: selfcontained
widgets: [mathjax]
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

<img src="assets/fig/cb-fig-1.png" alt="plot of chunk cb-fig" width="90%" />


---

## Scholarship on college access

Extant literatures, not mutually exclusive

- Student behavior
- Behavior of schools and postsecondary institutions (PSIs)
  - Scholarship on enrollment management fits here
      - Scholarship on admissions fits here
- Effects of federal, state, and local policies

<br>

Third-party providers; the other for-profit industry in education

- Schools and PSIs outsource functions to vendors and consultancies (Jaquette, Salazar, and Martin, 2022; Komljenovic, 2021; Komljenovic, 2022)
- Scholars have not investigated how third-party produces and services structure college access

<br>
Developing a literature about algorithmic products

- Literature at the intersections of access, enrollment management, and edtech
- Analyze products purchased by schools and PSIs
- Analyze the organizations that sell these products



---

## Structural racism in algorithmic products

Structural racism

- Processes -- often viewed as neutral or common-sense -- that systematically advantage dominant groups and disadvantage marginalized groups

<br>
Critical turn in higher education research
- Experiences of individual people provide insight about structural racism

<br>
Critical data studies (e.g., Benjamin, 2019; Noble, 2018) and sociology of race (e.g., Cottom, 2020; Norris, 2021) finds algorithmic reproduce/increase racial inequality
- *Structurally racist inputs*: Seemingly neutral inputs that correlate with race because of historical exclusion from this input (e.g., zip code, AP exam scores)


<br>
**RQ**: What is the relationship between student list search filters (e.g., test score range, zip code) and the characteristics of students who are included vs. excluded by student list purchases?
- Analyze student lists purchased from College Board
- Focus on race and class inequality in which prospects are included/excluded by student list purchases


--- .section

# Background on student Lists


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

## College Board and ACT student list products

Sources of student list data

- Test takers (e.g., PSAT, SAT, AP), pre-test questionnaire (demographics, preferences)
- More recently, from college search engines (e.g., College Board Big Future)  
- Students can opt in or out

<br>
What information does a list contain ([College Board template](https://drive.google.com/file/d/1Qvc_QRi9izEF1W78Lh4nNi5NsXjCZqUE/view))
- Contact, demographic, college preferences, limited academic achievement

<br>
Pricing

- Historically, a price-per-prospect model (e.g., \$0.50 per name)
- ACT and College Board moving to subscription model


<br>

Buying student lists

- "Search filters" control which prospects included/excluded from a purchase
- Commonly used search filters ([Link to ACT filters](https://helpcenter.encoura.org/hc/en-us/articles/360035260452-Prospect-Search-Filters-))
  - Graduation year, HS GPA, test score range, gender, race/ethnicity, geography (e.g., zip-code)
- New filters based on predictive analytics to facilitate micro-targeting
    - e.g., "geodemographic" filters target prospects based on past behavior of nearby students


--- .subsection

# EM Market dynamics


--- 

## Dynamics shaping the market for student list data


From [The Student List Business: Primer and market dynamics](https://ticas.org/wp-content/uploads/2022/09/The-Student-List-Business_-Primer-and-Market-Dynamics.pdf) (Jaquette, Salazar, and Martin, 2022):


1. **Centrality of enrollment management (EM) consulting firms**
  - Purchase student lists on behalf of universities
  - Names are input to firm predictive models and recruiting interventions
<br>

1. **Competition in the 2000s**
  - Technology >> new sources of student list data (e.g., college search engines; software used by high schools) >> entry by new vendors (e.g., Zinch)
  - *Note*: all student list data is derived from user-data from students on platforms
<br>
  
1. **Competition in the 2010s**
  - Horizontal acquisitions in EM consulting industry (e.g., RuffaloCODY acquires Noel-Levitz)
  - Vertical acquisitions transform market for student list data (e.g., PowerSchool acquires Naviance/Intersect from Hobsons; EAB acquires Cappex)
      - Leverage control over pool of names to sell software-as-service products
<br>

1. **Incumbents College Board and ACT evolve amidst threat from test-optional**
  - Create new search filters that aid micro-targeting of prospects
  - Leverage names database to sell EM consulting
  - Create/buy college search engines



--- .section

# Literature Review

--- .subsection

# Recruiting

--- 

## Sociological scholarship on recruiting

Enrollment funnel: prospects, leads, inquires, applicants, admits, enrolled
- Most scholarship focuses on latter stages (e.g., which applicants get admitted)
- Growing body of research analyzes recruiting "in the wild"
    
<br>
Recruiting from perspective of high school students (Holland, 2019)
- Underrepresented students sensitive to feeling "wanted" by colleges

<br>
Connections between (fancy) high schools and (fancy) colleges from an orgs perspective
- Off-campus recruiting visits indicate a network tie and enrollment priorities
- recruiting from perspective of: private college (Stevens, 2007); private HS counselors (Khan, 2011)
- Recruiting visits by public research universities   (e.g., Salazar, Jaquette, Han, 2021; Salazar, 2022)

<br>
Recruiting at open-access PSIs for adults  (e.g., Cottom, 2017; Posecznick, 2017)
- For-profits have demand in Black/Latinx communities **because** traditional colleges ignore them

<br>
Hook
- Scholarship assumes that recruiting is something done by colleges
- Ignores products and consultancies that structure recruiting

--- .subsection

# Sociology of race

--- 

## Racialized social systems and structural racism

Most social sciences define racism as ideology held by individuals (e.g., explicit or implicit racial bias)
- Measures societal racism by examining the attitudes of individuals
- Excludes the possibility that institutions can be racist


<br>

Bonilla-Silva (1997): focus on underlying social structure instead of individual ideology

- *Racialized social systems*: “societies that allocate differential economic, political, social, and even psychological rewards to groups along racial lines” (p. 474)
- Racial groups are a social construction of a racialized social system
  - Institutions allocate benefits to racial groups based on socially constructed racial hierarchy
- “Only way to ‘cure’ society of racism is by eliminating its systemic roots” (p. 476) within institutions


<br>
Structural racism

- “systematic racial bias embedded in the ‘normal’ functions of laws and social relations” (Tiako, South, and Ray, 2021) p. 1143; processes viewed as neutral systematically advantage dominant groups.

<br>
Race is fundamental to capitalism (racial capitalism)

- Source of profit is exploitation based on construction of race (Du Bois, 1935; Robinson, 2000)
- Analyses can focus on production (labor) or consumer (e.g., credit, housing) side of economy

--- 

## Algorithms and actuarialism

Algorithms

- "sets of instructions written as code and run on computers" (Burrell and Fourcade, 2021) (p. 215)

<br>
Algorithmic products utilize actuarial methods and logic

- _Actuarial methods_ proceed in two steps (Hirschman and Bosk, 2020)
    1. Model previous cases in order to identify determinants of an outcome
    1. Apply these results to future cases in order to make predictions and assign risk levels
- _Acturarialism_ (Simon, 1988)
    - ideology that equates fairness with risk, as determined by predicted probabilities
    - e.g., businesses that have characteristics associated with default should pay higher interest rates

<br>

Actuarialism and standardization

- Actuarial products remove individual judgment from decision-making
- Reduces racial inequity due to prejudice of individual decision-makers (Hirschman and Bosk, 2020)

--- 

## Actuarial methods reproduce structural racism

Classification situations (Fourcade and Healy, 2013)

- Defined as use of actuarial techniques by orgs to categorize consumers into different groups
- Binary classifications: loans offered to consumers with "good" credit, but not bad credit
- Advances in data analytics >> categorize customers into many groups
    - Tiered products with costs and benefits tied to level of risk (e.g., payday loan)
- Predatory inclusion (Seamster and Charron-Chénier, 2017; Cottom, 2020)
  - Target marginalized consumers for "democratizing mobility schemes on extractive terms” 


<br>
Structurally racist inputs

- Actuarial products predict future outcome by modeling determinants using historical data
    - “Predicting the future on the basis of the past threatens to reify and reproduce existing inequalities of treatment by institutions” (Burrell and Fourcade, 2021) (p. 224).
- Structurally racist input: determinant correlated with race because people of color have been historically excluded (e.g., Obermeyer, Powers, Vogeli, Mullainathan, 2019)
- Structural racism in Moody's credit rating algorithm for city governments (Norris, 2021)
  - %Black negatively associated with city rating until control for median household income
  - Median household income is a "racialized input": 
      - Seemingly neutral, structurally racist input that masks structural racism of algorithm


--- 

## Micro-targeting and market segments

- *Micro-targeting*: identify granular segments of society with great precision
- *Market segmentation*: categorize customers into groups for advertisers (e.g., "married sophisticates")

<br>

Racial exclusion is consequence of micro-targeting, market segmentation (Benjamin, 2019; Noble, 2018)

- These technologies *could* be used to target marginalized groups, but in practice they are not
- When developing classification systems, developer bias and structurally racist inputs enter algorithm
- Classification systems designed for profit, do not create audience segments not valued by advertisers


<br>

Micro-targeting and segmentation by Facebook (Cotter, Medeiros, Pak, et al., 2021) (p. 1)

- "Driven not by a goal of making all users available to advertisers, but of making the ‘right’ individuals"
- Tells advertisers choose "‘targeting strategy that focuses on reach and precision and eliminates waste'"

<br>
Student list products
- College Board Student Search: “create a real pipeline of best-fit prospects” 
- Ruffalo Noel Levitz (2021): “target the right students in the right markets” by making “the most efficient name purchases using predictive modeling”

<br>
Hook: Sociology of race has not studied products that help orgs identify customers (I think)

--- .section

# Conceptual Framework

--- 

## Conceptual Framework

Primary research question:

- What is the relationship between student list search filters (e.g., test score range, zip code) and the characteristics of students who are included vs. excluded in student lists purchased from College Board?

<br>

Two mechanisms of racial and socioeconomic exclusion in student list products  (Salazar, Jaquette, and Han, 2022):

1. Who is included in the underlying database
1. Structurally racist and classist search filters

<br>

Salazar, Jaquette, and Han (2022) categorizes College Board search filters into four buckets:

- Geographic
- Academic
- Demographic
- Student preferences

<br>
Drawing largely from the sociology of race, we develop expectations about which filters are associated with problematic exclusion

--- 

## Geographic filters

Geographic search filters enable universities to target prospects based on where they live

- e.g., state, zip code, CBSA, "geomarket," geodemographic market segment)

<br>

Critical geography and whiteness as property Harris (1993); Salazar (2022) 

- Residential segregation a function of historic and contemporary laws/policies/practicies
- Geographic filters are built on the back of racial segregation
- Targeting prospects based on location (space) without considering history of segregation (place) reinforces race-based inequality

<br>
Expected results

- Small geographic filters (e.g., zip code vs. metro) >> racial disparities because segregation granular
    - Targeting affluent communities >> racial exclusion because POC historically excluded
- Filters that create new borders based on historic education data >> racial disparities because borders reflect historic disparities in educational opportunities
    - "Geographic education market" filters: geomarket, geodemographic segment
    - These filters increases the effects of historic place-based inequality
        - Discriminate between prospects based on previously unknown geographic borders

--- .section

# Methods

--- .subsection

# Data collection

---

## Data collection overview

Data collection

- Issued public records requests to all public universities in four states (CA, IL, MN, TX)
- Target student list vendors: College Board, ACT
- Data collection began February 2020, sought purchases from 2016-2020

<br>

For each purchased list, sought two pieces of data

1. "Order summary" specifying search filter criteria ([LINK](https://drive.google.com/file/d/1gPZ-WWw0gdFT7VtzBN3hKLnj2DzoaqnY/view))
1. De-identified prospect-level student list ([LINK](https://drive.google.com/file/d/1Qvc_QRi9izEF1W78Lh4nNi5NsXjCZqUE/view))

<br>

Empirical research questions

1. Which filter criteria were selected in student lists purchases?
1. What are the characteristics of prospects included in student lists purchases?
1. **What is the relationship between student list filter criteria and the characteristics of
purchased prospects?**


---

## Summary of data received

<!-- html table generated in R 4.2.1 by xtable 1.8-4 package -->
<!-- Wed Sep 28 09:51:23 2022 -->
<table border=1>
  <tr style="text-align:center;"><th>State</th><th># received order summary</th><th># no order summary</th><th># received list</th><th># no list</th><th># received both</th><th># did not receive both</th></tr> <tr> <td align="center"> CA </td> <td align="center">   9 </td> <td align="center">  23 </td> <td align="center">  13 </td> <td align="center">  19 </td> <td align="center">   9 </td> <td align="center">  23 </td> </tr>
  <tr> <td align="center"> IL </td> <td align="center">   9 </td> <td align="center">   3 </td> <td align="center">   9 </td> <td align="center">   3 </td> <td align="center">   8 </td> <td align="center">   4 </td> </tr>
  <tr> <td align="center"> TX </td> <td align="center">  15 </td> <td align="center">  20 </td> <td align="center">  16 </td> <td align="center">  19 </td> <td align="center">  10 </td> <td align="center">  25 </td> </tr>
   </table>



---

## Orders and prospects purchased

<img src="assets/fig/orders-prospects-purchased-1.png" alt="plot of chunk orders-prospects-purchased" width="90%" />

--- .subsection

# Research design

--- 

## Summary of orders and prospects

<!-- html table generated in R 4.2.1 by xtable 1.8-4 package -->
<!-- Wed Sep 28 09:51:24 2022 -->
<table border=1>
  <tr style="text-align:center;"><th style="border-bottom:none;">RQ1</th><th style="border-bottom:none;">RQ3</th><th style="border-bottom:none;">RQ2</th><th style="border-bottom:none;">RQ3</th></tr><tr style="text-align:center;"><th># orders total</th><th># orders with list</th><th># prospects total</th><th># prospects with order</th></tr> <tr> <td align="center"> 830 </td> <td align="center"> 414 </td> <td align="center"> 3,663,257 </td> <td align="center"> 2,549,085 </td> </tr>
   </table>

<br>

Empirical research questions

1. Which filter criteria were selected in student lists purchases?
  - Unit of analysis = order; 830 orders (by 14 universities)
1. What are the characteristics of prospects included in student lists purchases?
  - unit of analysis = university-prospect; 3,663,257 prospects (by 14 universities)
1. **What is relationship between filter criteria and characteristics of purchased prospects?**
  - Unit of analysis = order-prospect; 414 orders associated with 2,548,085 prospects

<br>
Case study research design because non-random sample

- RQ1 and RQ2
  - Internal validity: are orders/prospects representative of behavior of 14 universities in sample?
  - External validity: cannot make inferences about population of public univs
- RQ3
  - Ixternal validity: set of search criteria yield same prospects regardless of which univ purchases
  - Analyses focus on "deep dives" of conceptually important order combinations

--- .section

# Results




--- .section

# Discussion

--- 

## Data as capital, obfuscation, and policy research

Student list data derived from user-data of students laboring on platforms

- Marx (1978): formula for economic capital is $M - C - M'$
    - money ($M$); commodities ($C$)
- Data as capital (Sadowski, 2019)
    - Data an input into production commodities (e.g., software predicting hospital staff needs)
    - Data are a commodity extracted from labor of people using digital platforms
- College Board follows $M - C - M'-C-M''$: Invest money ($M$) to develop tests ($C$); sold to households ($M'$) yielding student list data ($C$); sold to universities ($M''$)
- Emerging trend: wrap student list data within a software-as-service recruiting product


<br>
Obfuscation (Cottom, 2020; Pasquale, 2015)

- Opacity of digital platforms is deliberate strategy to manage regulatory environments
- **Really** hard to collect data about student list products or "student success" products

<br>
Policy

- Policy should regulate products sold to schools, universities, and students
- Developing regulations requires on a body of research
- Education researchers must interrogate third-party products and vendors
    - Focus on structural inequality embedded in product design

--- #references

# References
## &nbsp;

<div style="overflow-y: scroll;height: 500px;">
<p><a id='bib-RN4775'></a><a href="#cite-RN4775">[1]</a><cite>
R. Benjamin.
<em>Race after technology: Abolitionist tools for the new Jim code</em>.
Medford, MA: Polity, 2019.
ISBN: 9781509526390 (hardback)
9781509526406 (paperback).</cite></p>

<p><a id='bib-RN4814'></a><a href="#cite-RN4814">[2]</a><cite>
E. Bonilla-Silva.
&ldquo;Rethinking racism: Toward a structural interpretation&rdquo;.
In: <em>American Sociological Review</em> 62.3 (1997), pp. 465-480.
ISSN: 0003-1224.
DOI: <a href="https://doi.org/10.2307/2657316">10.2307/2657316</a>.
URL: <a href="%3CGo%20to%20ISI%3E://WOS:A1997XG45300007">&lt;Go to ISI&gt;://WOS:A1997XG45300007</a>.</cite></p>

<p><a id='bib-RN4794'></a><a href="#cite-RN4794">[3]</a><cite>
J. Burrell and M. Fourcade.
&ldquo;The society of algorithms&rdquo;.
In: <em>Annual Review of Sociology</em> 47 (2021), pp. 213-237.
ISSN: 978-0-8243-2247-2.
DOI: <a href="https://doi.org/10.1146/annurev-soc-090820-020800">10.1146/annurev-soc-090820-020800</a>.
URL: <a href="%3CGo%20to%20ISI%3E://WOS:000684003600012">&lt;Go to ISI&gt;://WOS:000684003600012</a>.</cite></p>

<p><a id='bib-RN4795'></a><a href="#cite-RN4795">[4]</a><cite>
K. Cotter, M. Medeiros, C. Pak, et al.
&ldquo;&quot;Reach the right people&quot;: The politics of &quot;interests&quot; in Facebook's classification system for ad targeting&rdquo;.
In: <em>Big Data &amp; Society</em> 8.1 (2021), p. 16.
ISSN: 2053-9517.
DOI: <a href="https://doi.org/10.1177/2053951721996046">10.1177/2053951721996046</a>.
URL: <a href="%3CGo%20to%20ISI%3E://WOS:000629354000001">&lt;Go to ISI&gt;://WOS:000629354000001</a>.</cite></p>

<p><a id='bib-cottom2017lower'></a><a href="#cite-cottom2017lower">[5]</a><cite>
T. M. Cottom.
<em>Lower ed: The troubling rise of for-profit colleges in the new economy</em>.
New Press, The, 2017.</cite></p>

<p><a id='bib-RN4774'></a><a href="#cite-RN4774">[6]</a><cite>
T. M. Cottom.
&ldquo;Where platform capitalism and racial capitalism meet: The sociology of race and racism in the digital society&rdquo;.
In: <em>Sociology of Race and Ethnicity</em> 6.4 (2020), pp. 441-449.
ISSN: 2332-6492.
DOI: <a href="https://doi.org/10.1177/2332649220949473">10.1177/2332649220949473</a>.
URL: <a href="https://doi.org/10.1177/2332649220949473">https://doi.org/10.1177/2332649220949473</a>.</cite></p>

<p><a id='bib-RN4782'></a><a href="#cite-RN4782">[7]</a><cite>
W. E. B. Du Bois.
<em>Black reconstruction: An essay toward a history of the part which black folk played in the attempt to reconstruct democracy in America, 1860-1880</em>.
1st.
New York: Russel &amp; Russel, 1935, p. 746.</cite></p>

<p><a id='bib-RN4810'></a><a href="#cite-RN4810">[8]</a><cite>
M. Fourcade and K. Healy.
&ldquo;Classification situations: Life-chances in the neoliberal era&rdquo;.
In: <em>Accounting Organizations and Society</em> 38.8 (2013), pp. 559-572.
ISSN: 0361-3682.
DOI: <a href="https://doi.org/10.1016/j.aos.2013.11.002">10.1016/j.aos.2013.11.002</a>.
URL: <a href="%3CGo%20to%20ISI%3E://WOS:000329013300001">&lt;Go to ISI&gt;://WOS:000329013300001</a>.</cite></p>

<p><a id='bib-RN4551'></a><a href="#cite-RN4551">[9]</a><cite>
C. I. Harris.
&ldquo;Whiteness as Property&rdquo;.
In: <em>Harvard Law Review</em> 106.8 (1993), pp. 1707-1791.
ISSN: 0017811X.
DOI: <a href="https://doi.org/10.2307/1341787">10.2307/1341787</a>.
URL: <a href="www.jstor.org/stable/1341787">www.jstor.org/stable/1341787</a>.</cite></p>

<p><a id='bib-RN4778'></a><a href="#cite-RN4778">[10]</a><cite>
D. Hirschman and E. A. Bosk.
&ldquo;Standardizing biases: Selection devices and the quantification of race&rdquo;.
In: <em>Sociology of Race and Ethnicity</em> 6.3 (2020), pp. 348-364.
DOI: <a href="https://doi.org/10.1177/2332649219844797">10.1177/2332649219844797</a>.
URL: <a href="https://journals.sagepub.com/doi/abs/10.1177/2332649219844797">https://journals.sagepub.com/doi/abs/10.1177/2332649219844797</a>.</cite></p>

<p><a id='bib-RN4324'></a><a href="#cite-RN4324">[11]</a><cite>
M. M. Holland.
<em>Divergent paths to college: Race, class, and inequality in high schools</em>.
Rutgers University Press, 2019.
DOI: <a href="https://doi.org/10.36019/9780813590288">10.36019/9780813590288</a>.</cite></p>

<p><a id='bib-RN4739'></a><a href="#cite-RN4739">[12]</a><cite>
J. Howell, M. H. Hurwitz, Z. Mabel, et al.
<em>Participation in student search service is associated with higher college enrollment and completion</em>.
Tech. rep.
College Board, 2021.
URL: <a href="https://cbsearch.collegeboard.org/pdf/college-outreach-and-student-outcomes.pdf">https://cbsearch.collegeboard.org/pdf/college-outreach-and-student-outcomes.pdf</a>.</cite></p>

<p><a id='bib-list_biz'></a><a href="#cite-list_biz">[13]</a><cite>
O. Jaquette, K. Salazar, and P. Martin.
<em>The student list business: Primer and market dynamics</em>.
Tech. rep.
washington, DC: TICAS, 2022.
URL: <a href="https://ticas.org/wp-content/uploads/2022/09/The-Student-List-Business_-Primer-and-Market-Dynamics.pdf">https://ticas.org/wp-content/uploads/2022/09/The-Student-List-Business_-Primer-and-Market-Dynamics.pdf</a>.</cite></p>

<p><a id='bib-RN4407'></a><a href="#cite-RN4407">[14]</a><cite>
S. R. Khan.
<em>Privilege: The making of an adolescent elite at St. Paul's School</em>.
Princeton studies in cultural sociology.
Princeton, N.J.: Princeton University Press, 2011, p. 232.
ISBN: 9780691145280 (alk. paper)
0691145288 (alk. paper)
9780691156231 (pbk.)
0691156239 (pbk.).</cite></p>

<p><a id='bib-RN4815'></a><a href="#cite-RN4815">[15]</a><cite>
J. Komljenovic.
&ldquo;The future of value in digitalised higher education: why data privacy should not be our biggest concern&rdquo;.
In: <em>Higher Education</em> 83.1 (2022), pp. 119-135.
ISSN: 1573-174X.
DOI: <a href="https://doi.org/10.1007/s10734-020-00639-7">10.1007/s10734-020-00639-7</a>.
URL: <a href="https://doi.org/10.1007/s10734-020-00639-7">https://doi.org/10.1007/s10734-020-00639-7</a>.</cite></p>

<p><a id='bib-RN4793'></a><a href="#cite-RN4793">[16]</a><cite>
J. Komljenovic.
&ldquo;The rise of education rentiers: digital platforms, digital data and rents&rdquo;.
In: <em>Learning Media and Technology</em> 46.3 (2021), pp. 320-332.
ISSN: 1743-9884.
DOI: <a href="https://doi.org/10.1080/17439884.2021.1891422">10.1080/17439884.2021.1891422</a>.
URL: <a href="%3CGo%20to%20ISI%3E://WOS:000620464000001">&lt;Go to ISI&gt;://WOS:000620464000001</a>.</cite></p>

<p><a id='bib-RN1025'></a><a href="#cite-RN1025">[17]</a><cite>
K. Marx.
&ldquo;Capital&rdquo;.
In: 
<em>The Marx-Engels Reader</em>.
Ed. by R. C. Tucker.
second.
New York: W.W. Norton and Company, 1978.</cite></p>

<p><a id='bib-RN4772'></a><a href="#cite-RN4772">[18]</a><cite>
S. U. Noble.
<em>Algorithms of oppression: how search engines reinforce racism</em>.
New York: New York University Press, 2018.
ISBN: 9781479849949 (cl alk. paper)
9781479837243 (pb alk. paper).</cite></p>

<p><a id='bib-RN4786'></a><a href="#cite-RN4786">[19]</a><cite>
D. Norris.
&ldquo;Embedding racism: City government credit ratings and the institutionalization of race in markets&rdquo;.
In: <em>Social Problems</em> (2021).
ISSN: 0037-7791.
DOI: <a href="https://doi.org/10.1093/socpro/spab066">10.1093/socpro/spab066</a>.
URL: <a href="https://doi.org/10.1093/socpro/spab066">https://doi.org/10.1093/socpro/spab066</a>.</cite></p>

<p><a id='bib-doi1011'></a><a href="#cite-doi1011">[20]</a><cite>
Z. Obermeyer, B. Powers, C. Vogeli, et al.
&ldquo;Dissecting racial bias in an algorithm used to manage the health of populations&rdquo;.
In: <em>Science</em> 366.6464 (2019), pp. 447-453.
DOI: <a href="https://doi.org/10.1126/science.aax2342">10.1126/science.aax2342</a>.
eprint: https://www.science.org/doi/pdf/10.1126/science.aax2342.
URL: <a href="https://www.science.org/doi/abs/10.1126/science.aax2342">https://www.science.org/doi/abs/10.1126/science.aax2342</a>.</cite></p>

<p><a id='bib-RN4842'></a><a href="#cite-RN4842">[21]</a><cite>
F. Pasquale.
<em>The black box society: the secret algorithms that control money and information</em>.
Cambridge: Harvard University Press, 2015, p. 311.
ISBN: 9780674368279.</cite></p>

<p><a id='bib-RN4520'></a><a href="#cite-RN4520">[22]</a><cite>
A. Posecznick.
<em>Selling hope and college merit, markets, and recruitment in an unranked school</em>.
Ithaca ; London: Cornell University Press, 2017.
ISBN: 9781501707582
9781501709821.
URL: <a href="https://muse.jhu.edu/book/52616">https://muse.jhu.edu/book/52616</a>.</cite></p>

<p><a id='bib-RN4773'></a><a href="#cite-RN4773">[23]</a><cite>
C. J. Robinson.
<em>Black marxism: The making of the Black radical tradition</em>.
Chapel Hill, N.C.: University of North Carolina Press, 2000, p. xxxiii, 436.
ISBN: 0807848298 (pbk. alk. paper).
URL: <a href="Table%20of%20Contents%20http://lcweb.loc.gov/catdir/toc/99030995.html">Table of Contents http://lcweb.loc.gov/catdir/toc/99030995.html</a>.</cite></p>

<p><a id='bib-ruffalo_noel_levitz_2021'></a><a href="#cite-ruffalo_noel_levitz_2021">[24]</a><cite>
Ruffalo Noel Levitz.
<em>RNL Student Search and Engagement</em>.
Jul. 2021.
URL: <a href="https://www.ruffalonl.com/enrollment-management-solutions/building-demand/student-search-and-engagement/">https://www.ruffalonl.com/enrollment-management-solutions/building-demand/student-search-and-engagement/</a>.</cite></p>

<p><a id='bib-RN4799'></a><a href="#cite-RN4799">[25]</a><cite>
J. Sadowski.
&ldquo;When data is capital: Datafication, accumulation, and extraction&rdquo;.
In: <em>Big Data &amp; Society</em> 6.1 (2019), p. 12.
ISSN: 2053-9517.
DOI: <a href="https://doi.org/10.1177/2053951718820549">10.1177/2053951718820549</a>.
URL: <a href="%3CGo%20to%20ISI%3E://WOS:000455488000001">&lt;Go to ISI&gt;://WOS:000455488000001</a>.</cite></p>

<p><a id='bib-RN4759'></a><a href="#cite-RN4759">[26]</a><cite>
K. G. Salazar.
&ldquo;Recruitment Redlining by Public Research Universities in the Los Angeles and Dallas Metropolitan Areas&rdquo;.
In: <em>The Journal of Higher Education</em> (2022), pp. 1&ndash;37.
DOI: <a href="https://doi.org/10.1080/00221546.2021.2004811">10.1080/00221546.2021.2004811</a>.
URL: <a href="https://doi.org/10.1080/00221546.2021.2004811">https://doi.org/10.1080/00221546.2021.2004811</a>.</cite></p>

<p><a id='bib-RN4758'></a><a href="#cite-RN4758">[27]</a><cite>
K. G. Salazar, O. Jaquette, and C. Han.
&ldquo;Coming Soon to a Neighborhood Near You? Off-Campus Recruiting by Public Research Universities&rdquo;.
In: <em>American Educational Research Journal</em> 58.6 (2021), pp. 1270-1314.
DOI: <a href="https://doi.org/10.3102/00028312211001810">10.3102/00028312211001810</a>.
URL: <a href="https://journals.sagepub.com/doi/abs/10.3102/00028312211001810">https://journals.sagepub.com/doi/abs/10.3102/00028312211001810</a>.</cite></p>

<p><a id='bib-list_empirics'></a><a href="#cite-list_empirics">[28]</a><cite>
K. Salazar, O. Jaquette, and C. Han.
<em>Geodemographics of student list purchases: a first look</em>.
Tech. rep.
Washington, DC: TICAS, 2022.
URL: <a href="https://ticas.org/wp-content/uploads/2022/09/Geodemographics-of-Student-List-Purchases_A-First-Look.pdf">https://ticas.org/wp-content/uploads/2022/09/Geodemographics-of-Student-List-Purchases_A-First-Look.pdf</a>.</cite></p>

<p><a id='bib-RN4841'></a><a href="#cite-RN4841">[29]</a><cite>
L. Seamster and R. Charron-Chénier.
&ldquo;Predatory inclusion and education debt: Rethinking the racial wealth gap&rdquo;.
In: <em>Social Currents</em> 4.3 (2017), pp. 199-207.
DOI: <a href="https://doi.org/10.1177/2329496516686620">10.1177/2329496516686620</a>.
URL: <a href="https://journals.sagepub.com/doi/abs/10.1177/2329496516686620">https://journals.sagepub.com/doi/abs/10.1177/2329496516686620</a>.</cite></p>

<p><a id='bib-RN4835'></a><a href="#cite-RN4835">[30]</a><cite>
J. Simon.
&ldquo;The ideological effects of actuarial practices&rdquo;.
In: <em>Law &amp; Society Review</em> 22.4 (1988), pp. 771-800.
ISSN: 0023-9216.
DOI: <a href="https://doi.org/10.2307/3053709">10.2307/3053709</a>.
URL: <a href="%3CGo%20to%20ISI%3E://WOS:A1988R764700008">&lt;Go to ISI&gt;://WOS:A1988R764700008</a>.</cite></p>

<p><a id='bib-RN3519'></a><a href="#cite-RN3519">[31]</a><cite>
M. L. Stevens.
<em>Creating a class: College admissions and the education of elites</em>.
Cambridge, MA: Harvard University Press, 2007, p. 308.
ISBN: 9780674026735 (alk. paper) 067402673X (alk. paper).</cite></p>

<p><a id='bib-RN4760'></a><a href="#cite-RN4760">[32]</a><cite>
M. J. N. Tiako, E. South, and V. Ray.
&ldquo;Medical Schools as Racialized Organizations: A Primer&rdquo;.
In: <em>Annals of Internal Medicine</em> 174.8 (2021), pp. 1143-1144.
DOI: <a href="https://doi.org/10.7326/m21-0369%20%25m%2034058105%7D%7B10.7326/m21-0369%20%25m%2034058105%7D."></a></cite></p>
</div>
