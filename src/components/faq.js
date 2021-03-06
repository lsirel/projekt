import React, { useEffect, useState } from 'react';
import './faq.css';
import fetch from '../api/fetch';


const Faq = () => {
    const [getFaqs, setFaqs] = useState([]);

    useEffect(() => {
        fetch.getFaqs()
            .then(data => setFaqs(data))
    }, [])
    
  return(
      <div className="box">
          <p className="heading">FAQs</p>
          {getFaqs.map((faqs) => (
          <div key={faqs.id} class="faqs">
              <details>
                  <summary>{faqs.name}</summary>
                  <p className="content">{faqs.description}</p>
              </details>
          </div>
          ))}
      </div>
    );
}

export default Faq;