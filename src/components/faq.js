/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import './faq.css';
import fetch from '../api/fetch';


export default function Faq() {
    const [getFaqs, setFaqs] = useState([]);

    useEffect(() => {
        fetch.getFaqs()
            .then(data => setFaqs(data))
    }, [])
    
  return(
      <div class="box">
          <p class="heading">FAQs</p>
          {getFaqs.map((faqs) => (
          <div key={faqs.id} class="faqs">
              <details>
                  <summary>{faqs.name}</summary>
                  <p class="content">{faqs.description}</p>
              </details>
          </div>
          ))}
      </div>
    );
}