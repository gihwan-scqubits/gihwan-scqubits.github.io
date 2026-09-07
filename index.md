---
layout: default
title: Gihwan Kim
body_class: home
---
<section class="intro">
  <div>
    <h1>Gihwan Kim</h1>
    <p class="tagline">Applied Scientist, AWS Center for Quantum Computing</p>
    <p>I build superconducting quantum circuits for hardware-efficient, fault-tolerant quantum
    computers. My background spans the full circuit QED stack: device physics, circuit design, and
    device measurement. Lately I am most interested in device design, and in finding the right amount
    of nonlinearity for a scalable superconducting quantum processor.</p>
    <p>I received my Ph.D. in Applied Physics from Caltech in 2026, working with
    <a href="https://painterlab.caltech.edu">Oskar Painter</a> in the Quantum Photonics Group. I grew up
    in Pohang, South Korea, and studied Electrical and Computer Engineering at Seoul National University.</p>
    {% include links.html %}
  </div>
  <img class="portrait" src="{{ '/assets/img/profile.jpg' | relative_url }}" alt="Portrait of Gihwan Kim" width="168" height="168">
</section>

<section class="section" id="experience">
  <span class="label">Experience</span>
  <ul class="timeline">
    {% for x in site.data.experience.positions %}
    <li>
      <span class="when">{{ x.dates }}</span>
      <p class="what"><strong>{{ x.title }}</strong>, <span>{{ x.org }}</span>{% if x.note %}<span class="note">{{ x.note }}</span>{% endif %}</p>
    </li>
    {% endfor %}
    {% for x in site.data.experience.education %}
    <li>
      <span class="when">{{ x.dates }}</span>
      <p class="what"><strong>{{ x.degree }}</strong>, <span>{{ x.org }}</span>{% if x.note %}<span class="note">{{ x.note }}</span>{% endif %}</p>
    </li>
    {% endfor %}
  </ul>
</section>

<section class="section" id="publications">
  <span class="label">Publications</span>
  <ul class="pubs">
    {% for p in site.data.publications %}{% include publication.html pub=p %}{% endfor %}
  </ul>
  <p class="pub-note" style="color: var(--ink-3); font-size: 0.88rem;">* equal contribution. Full list on
  <a href="https://scholar.google.com/citations?user={{ site.author.scholar }}">Google Scholar</a>.</p>
</section>

<section class="section" id="conferences">
  <span class="label">Conferences</span>
  <ul class="talks">
    {% for t in site.data.talks %}
    <li>
      <span class="when">{{ t.date }}</span>
      <p class="title">{{ t.title }}<span class="where">{{ t.event }} · {{ t.role }}</span></p>
    </li>
    {% endfor %}
  </ul>
</section>

<section class="section" id="blog">
  <span class="label">Blog</span>
  <ul class="post-list">
    {% for post in site.posts limit: 3 %}
    <li{% if post.thumb %} class="has-thumb"{% endif %}>
      <span class="when">{{ post.date | date: "%b %Y" }}</span>
      {% if post.thumb %}<a class="post-thumb" href="{{ post.url | relative_url }}" aria-hidden="true" tabindex="-1"><img src="{{ post.thumb | relative_url }}" alt="" loading="lazy"></a>{% endif %}
      <div>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        {% if post.subtitle %}<p class="excerpt">{{ post.subtitle }}</p>{% elsif post.excerpt %}<p class="excerpt">{{ post.excerpt | strip_html | truncate: 140 }}</p>{% endif %}
      </div>
    </li>
    {% endfor %}
  </ul>
  <p><a href="{{ '/blog/' | relative_url }}">All posts →</a></p>
</section>
