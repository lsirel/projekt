import React from 'react';
import './schedule.css'

export default function Schedule() {
  return(
    <table>
      <thead>
        <tr>
          <th>
            <span class="long">JUNE</span>
            <span class="short">JUN</span>
          </th>
          <th>
            <span class="day">31</span>
            <span class="long">Monday</span>
            <span class="short">Mon</span>
          </th>
          <th>
            <span class="day">1</span>
            <span class="long">Tuesday</span>
            <span class="short">Tue</span>
          </th>
          <th>
            <span class="day">2</span>
            <span class="long">Wednesday</span>
            <span class="short">We</span>
          </th>
          <th>
            <span class="day">3</span>
            <span class="long">Thursday</span>
            <span class="short">Thur</span>
          </th>
          <th>
            <span class="day active">4</span>
            <span class="long">Friday</span>
            <span class="short">Fri</span>
          </th>
          <th>
            <span class="day">5</span>
            <span class="long">Saturday</span>
            <span class="short">Sat</span>
          </th>
          <th>
            <span class="day">6</span>
            <span class="long">Sunday</span>
            <span class="short">Sun</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="hour" rowspan="4"><span>18:00-19:00</span></td>
          <td></td>
          <td></td>
          <td className="improvers"></td>
          <td className="intermediate"></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td className="improvers">Improvers B1</td>
          <td className="intermediate">Intermediate C1</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td className="improvers">(2h)</td>
          <td className="intermediate">(2h)</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td className="improvers"></td>
          <td className="intermediate"></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        
        <tr>
          <td class="hour" rowspan="4"><span>19:00-20:00</span></td>
          <td></td>
          <td className="advanced"></td>
          <td className="improvers"></td>
          <td className="intermediate"></td>
          <td></td>
          <td></td>
          <td className="show-dance"></td>
        </tr>
        <tr>
          <td></td>
          <td className="advanced">Advanced D1</td>
          <td className="improvers"></td>
          <td className="intermediate"></td>
          <td></td>
          <td></td>
          <td className="show-dance">Show Dance</td>
        </tr>
        <tr>
          <td></td>
          <td className="advanced">(2h)</td>
          <td className="improvers"></td>
          <td className="intermediate"></td>
          <td></td>
          <td className="workshop"></td>
          <td className="show-dance">(2h)</td>
        </tr>
        <tr>
          <td></td>
          <td className="advanced"></td>
          <td className="improvers"></td>
          <td className="intermediate"></td>
          <td></td>
          <td className="workshop">Workshop Open</td>
          <td className="show-dance"></td>
        </tr>
        <tr>
          <td class="hour" rowspan="4"><span>20:00-21:00</span></td>
          <td className="beginners"></td>
          <td className="advanced"></td>
          <td className="ladies-shines"></td>
          <td></td>
          <td></td>
          <td className="workshop">(3h)</td>
          <td className="show-dance"></td>
        </tr>
        <tr>
          <td className="beginners">Beginners A1</td>
          <td className="advanced"></td>
          <td className="ladies-shines">Ladies Shines</td>
          <td></td>
          <td></td>
          <td className="workshop"></td>
          <td className="show-dance"></td>
        </tr>
        <tr>
          <td className="beginners">(2h)</td>
          <td className="advanced"></td>
          <td className="ladies-shines">(1h 15min)</td>
          <td></td>
          <td></td>
          <td className="workshop"></td>
          <td className="show-dance"></td>
        </tr>
        <tr>
          <td className="beginners"></td>
          <td className="advanced"></td>
          <td className="ladies-shines"></td>
          <td></td>
          <td></td>
          <td className="workshop"></td>
          <td className="show-dance"></td>
        </tr>
        <tr>
          <td class="hour" rowspan="4"><span>21:00-22:00</span></td>
          <td className="beginners"></td>
          <td></td>
          <td className="ladies-shines"></td>
          <td></td>
          <td className="bachata-party"></td>
          <td className="workshop"></td>
          <td></td>
        </tr>
        <tr>
          <td className="beginners"></td>
          <td className="instructors-training"></td>
          <td></td>
          <td></td>
          <td className="bachata-party">Bachata Party</td>
          <td className="workshop"></td>
          <td></td>
        </tr>
        <tr>
          <td className="beginners"></td>
          <td className="instructors-training">Instructors</td>
          <td></td>
          <td></td>
          <td className="bachata-party"></td>
          <td className="workshop"></td>
          <td></td>
        </tr>
        <tr>
          <td className="beginners"></td>
          <td className="instructors-training">Training</td>          
          <td></td>
          <td></td>
          <td className="bachata-party"></td>
          <td className="workshop"></td>
          <td></td>
        </tr>
        <tr>
          <td class="hour" rowspan="4"><span>22:00-23:00</span></td>
          <td></td>
          <td className="instructors-training"></td>
          <td></td>
          <td></td>
          <td className="bachata-party"></td>
          <td className="workshop"></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td className="instructors-training"></td>
          <td></td>
          <td></td>
          <td className="bachata-party"></td>
          <td className="workshop"></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td className="instructors-training"></td>
          <td></td>
          <td></td>
          <td className="bachata-party"></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td className="bachata-party"></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    // <div class="calendar-container">
    //   <div class="calendar-header">
    //     <h1>
    //       November
    //       <button>▾</button>
    //     </h1>
    //     <p>2018</p>
    //   </div>
    //   <div class="calendar"><span class="day-name">Mon</span><span class="day-name">Tue</span><span class="day-name">Wed</span><span class="day-name">Thu</span><span class="day-name">Fri</span><span class="day-name">Sat</span><span class="day-name">Sun</span>
    //     <div class="day day--disabled">30</div>
    //     <div class="day day--disabled">31</div>
    //     <div class="day">1</div>
    //     <div class="day">2</div>
    //     <div class="day">3</div>
    //     <div class="day">4</div>
    //     <div class="day">5</div>
    //     <div class="day">6</div>
    //     <div class="day">7</div>
    //     <div class="day">8</div>
    //     <div class="day">9</div>
    //     <div class="day">10</div>
    //     <div class="day">11</div>
    //     <div class="day">12</div>
    //     <div class="day">13</div>
    //     <div class="day">14</div>
    //     <div class="day">15</div>
    //     <div class="day">16</div>
    //     <div class="day">17</div>
    //     <div class="day">18</div>
    //     <div class="day">19</div>
    //     <div class="day">20</div>
    //     <div class="day">21</div>
    //     <div class="day">22</div>
    //     <div class="day">23</div>
    //     <div class="day">24</div>
    //     <div class="day">25</div>
    //     <div class="day">26</div>
    //     <div class="day">27</div>
    //     <div class="day">28</div>
    //     <div class="day">29</div>
    //     <div class="day">30</div>
    //     <div class="day">31</div>
    //     <div class="day day--disabled">1</div>
    //     <div class="day day--disabled">2</div>
    //     <section class="task task--warning">Projects</section>
    //     <section class="task task--danger">Design Sprint</section>
    //     <section class="task task--primary">Product Checkup 1
    //       <div class="task__detail">
    //         <h2>Product Checkup 1</h2>
    //         <p>15-17th November</p>
    //       </div>
    //     </section>
    //     <section class="task task--info">Product Checkup 2</section>
    //   </div>
    // </div>
  );
}