---
layout: default
title: Blog
permalink: /blog/
---
<section class="section" style="border-top: 0; margin-top: 0;">
  <span class="label">Blog</span>
  <p class="blog-intro">Notes on superconducting circuits, measurement, simulation tools, and occasionally opinions. Views are my own and do not represent my employer.</p>
  <ul class="post-list">
    {% for post in site.posts %}
    <li{% if post.thumb %} class="has-thumb"{% endif %}>
      <span class="when">{{ post.date | date: "%b %-d, %Y" }}</span>
      {% if post.thumb %}<a class="post-thumb" href="{{ post.url | relative_url }}" aria-hidden="true" tabindex="-1"><img src="{{ post.thumb | relative_url }}" alt="" loading="lazy"></a>{% endif %}
      <div>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        {% if post.subtitle %}<p class="excerpt">{{ post.subtitle }}</p>{% elsif post.excerpt %}<p class="excerpt">{{ post.excerpt | strip_html | truncate: 160 }}</p>{% endif %}
      </div>
    </li>
    {% endfor %}
  </ul>
</section>
