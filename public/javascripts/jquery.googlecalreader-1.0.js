/// <reference path="jquery-1.5.1.min.js" />

/*
* Google Calendar feed reader - plugin to get upcoming events from a *public* google calendar
* Parameters: FeedUri, MaxResults & DisplayCount
* README: Make sure that your gCal feed url end with "/public/full".
* @version 1.0
*/

(function ($) {
    
    //Resize image on ready or resize
    $.gCalReader = function (options) {
        //Default settings
        var settings = {
            feedUri: 'http://www.google.com/calendar/feeds/en.usa%23holiday%40group.v.calendar.google.com/public/full',
            maxresults: 20,
            displayCount: 1
        };

        var feedUri = options.feedUri;
        if (feedUri.indexOf("public/full") == -1) {
            feedUri = settings.feedUri;
        }

        var options = $.extend(settings, options);

        function _run() {
            var calendarService = new google.gdata.calendar.CalendarService('GoogleInc-jsguide-1.0');

            // The "public/full" feed is used to retrieve events from the named public calendar with full projection.
            var query = new google.gdata.calendar.CalendarEventQuery(feedUri);
            query.setOrderBy('starttime');
            query.setSortOrder('ascending');
            query.setFutureEvents(true);
            query.setSingleEvents(true);
            query.setMaxResults(options.maxresults);

            var callback = function (result) {

                var entries = result.feed.getEntries();
                $('#events').html('');
                /*
                if (options.displayCount) {
                    $('#events').html(entries.length + ' upcoming events');
                }*/
                $('#events').append('<ul id="eventlist"></ul>');

                for (var i = 0; i < entries.length; i++) {
                    var eventEntry = entries[i];
                    var eventTitle = eventEntry.getTitle().getText();
                    var startDateTime = null;
                    var eventDate = null;
                    var eventWhere = null;
                    var eventContent = ("" == eventEntry.getContent().getText()) ? 'N/A' : eventEntry.getContent().getText();

                    var times = eventEntry.getTimes();
                    if (times.length > 0) {
                        startDateTime = times[0].getStartTime();
                        eventDate = startDateTime.getDate();
                    }

                    var d_names = new Array("Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat");
                    var m_names = new Array("Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec");

                    var a_p = "";
                    var d = eventDate;
                    var curr_hour = d.getHours();
                    if (curr_hour < 12) {
                        a_p = "am";
                    }
                    else {
                        a_p = "pm";
                    }
                    if (curr_hour == 0) {
                        curr_hour = 12;
                    }
                    if (curr_hour > 12) {
                        curr_hour = curr_hour - 12;
                    }

                    var curr_min = d.getMinutes();
                    curr_min = curr_min + "";

                    if (curr_min.length == 1) {
                        curr_min = "0" + curr_min;
                    }

                    var time = curr_hour + ':' + curr_min + a_p;
                    var day = eventDate.getDay();
                    var month = eventDate.getMonth();
                    var date = eventDate.getDate();
                    var dayname = d_names[day];
                    var monthname = m_names[month];
                    var location = eventEntry.getLocations();
                    var eventWhere = ("" == location[0].getValueString()) ? 'N/A' : location[0].getValueString();
                    
                    var eventhtml = '<a href="#" title="' + dayname + ' ' + monthname + ' ' + date + ', ' + time + '\nWhere: ' + eventWhere + '\nDescription: ' + eventContent + '"><span class="date">' + monthname + ' ' + date + '</span> ' + eventTitle + '</a>';
                    //'<div id="eventtitle">' + eventTitle + '</div>  When: ' + dayname + ' ' + monthname + ' ' + date + ', ' + time + '<br>Where: ' + eventWhere + '<br>' + eventContent;
                    $('#eventlist').append('<li>' + eventhtml + '</li>');
                }
            };

            // Error handler to be invoked when getEventsFeed() produces an error
            var handleError = function (error) {
                $('#events').html('<pre>' + error + '</pre>');
            };

            // Submit the request using the calendar service object
            calendarService.getEventsFeed(query, callback, handleError);
        }
        google.setOnLoadCallback(_run);

        $(window).load(function () {

        }); 	//End window load
    };

})(jQuery);
