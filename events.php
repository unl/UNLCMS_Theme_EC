<div class="wdn-band creamy-wrapper compass">
    <div class="wdn-inner-wrapper">
        <h2 class="small grouped-header ec-heading">
            Upcoming Events
            <a href="events" class="sub-task">View all upcoming events</a>
        </h2>
        <ul class="bp1-wdn-grid-set-halves bp2-wdn-grid-set-fourths center-adjust">
<?php
    $events = simplexml_load_file('http://events.unl.edu/explorecenter/upcoming/?format=xml&limit=4');
    foreach ($events as $event) {
        $date = $event->DateTime[0]->StartDate.' '.$event->DateTime[0]->StartTime;
        // Events system outputs a GMT time when it's really America/Chicago, so trim off the Z
        $date = strtotime(trim($date, 'Z'));
        $time = $date;
        $location = $event->Locations[0]->Location[0]->LocationName;
        echo '<li class="wdn-col event-listing">
             <div class="date center">
             <span class="month">'
             .  date("M", $date) .
             '</span>
             <span class="day">'
             .  date("j", $date) .
             '</span>
             <span class="start-time">'
             .  date("g:i A", $time) .
             '</span>
             </div>
             <div class="event-details small">
             <a href="' .  $event->WebPages[0]->WebPage[0]->URL .'">'
             . $event->EventTitle . 
             '</a>';
            if (isset($location)) {
                echo '<span class="location">'
                     . $location .
                     '</span>';
            }
            echo '</div>';
        echo '</li>';
    }
?>
        </ul>
    </div>
</div>
