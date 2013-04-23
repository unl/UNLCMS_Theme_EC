<div class="wdn-band creamy-wrapper compass">
    <div class="wdn-inner-wrapper">
        <h2 class="small grouped-header ec-heading">
            Upcoming Events
            <a href="http://events.unl.edu/explorecenter/upcoming/" class="sub-task">View all upcoming events</a>
        </h2>
        <ul class="bp1-wdn-grid-set-halves bp2-wdn-grid-set-fourths center-adjust">
<?php
    $events = simplexml_load_file('http://events.unl.edu/explorecenter/upcoming/?format=xml&limit=4');
    foreach ($events as $event) {
        $date = strtotime($event->DateTime[0]->StartDate);
        $time = strtotime($event->DateTime[0]->StartTime);
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
             '</a>
             </div>';
        if (isset($location)) {
            echo '<span class="location">'
                 . $location .
                 '</span>';
        }
        echo '</li>';
    }
?>
        </ul>
    </div>
</div>