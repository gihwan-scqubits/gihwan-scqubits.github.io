---
layout: default
title: Blog
permalink: /blog/
---
<section class="section" style="border-top: 0; margin-top: 0;">
  <span class="label">Blog</span>
  <p class="blog-intro">Notes on superconducting circuits, measurement, simulation tools, and occasionally opinions.
  Subscribe via <a href="{{ '/blog/feed.xml' | relative_url }}">RSS</a>.</p>
  <ul class="post-list">
    {% for post in site.posts %}
    <li>
      <span class="when">{{ post.date | date: "%b %-d, %Y" }}</span>
      <div>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        {% if post.excerpt %}<p class="excerpt">{{ post.excerpt | strip_html | truncate: 160 }}</p>{% endif %}
      </div>
    </li>
    {% endfor %}
  </ul>
</section>
