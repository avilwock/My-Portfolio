
import { useState } from "react";
import styles from "./Calendar.module.css";
import calendarEvents from "../../data/calendarEvents";

function Calendar() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(
        new Date().toISOString().split("T")[0]
    );

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const changeMonth = (direction) => {
        setCurrentDate(new Date(year, month + direction, 1));
    };

    const selectedEvents = calendarEvents.filter(
        (event) => event.date === selectedDate
    );

    const days = [];

    for (let i = 0; i < firstDay; i++) {
        days.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        days.push(day);
    }

    const formatDate = (date) => {
        return date.toLocaleDateString("en-US", {
            month: "long",
            year: "numeric"
        });
    };

    return (
        <div className={styles.calendar}>
            <h1> Developing Calendar </h1>

            <div className={styles.monthNavigation}>
                <button onClick={() => changeMonth(-1)}>
                    Previous
                </button>

                <h2>{formatDate(currentDate)}</h2>

                <button onClick={() => changeMonth(1)}>
                    Next
                </button>
            </div>

            <div className={styles.calendarGrid}>
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                    (day) => (
                        <div key={day} className={styles.weekday}>
                            {day}
                        </div>
                    )
                )}

                {days.map((day, index) => {
                    if (day === null) {
                        return (
                            <div
                                key={`empty-${index}`}
                                className={styles.emptyDay}
                            />
                        );
                    }

                    const dateString = [
                        year,
                        String(month + 1).padStart(2, "0"),
                        String(day).padStart(2, "0")
                    ].join("-");

                    const dayEvents = calendarEvents.filter(
                        (event) => event.date === dateString
                    );

                    return (
                        <button
                            key={dateString}
                            className={`${styles.day} ${
                                selectedDate === dateString
                                    ? styles.selectedDay
                                    : ""
                            }`}
                            onClick={() => setSelectedDate(dateString)}
                        >
                            <span>{day}</span>

                            <div className={styles.eventIndicators}>
                                {dayEvents.map((event) => (
                                    <span
                                        key={event.id}
                                        className={styles[event.category]}
                                    />
                                ))}
                            </div>
                        </button>
                    );
                })}
            </div>

            <div className={styles.calendarKey}>
                <div>
                    <span className={styles.release}></span>
                    Product Releases
                </div>

                <div>
                    <span className={styles.update}></span>
                    Product Update
                </div>

                <div>
                    <span className={styles.announcement}></span>
                    Announcements
                </div>
            </div>

            <div className={styles.eventList}>
                <h2>
                    Events for{" "}
                    {new Date(selectedDate + "T12:00:00").toLocaleDateString(
                        "en-US",
                        {
                            month: "long",
                            day: "numeric",
                            year: "numeric"
                        }
                    )}
                </h2>

                {selectedEvents.length > 0 ? (
                    selectedEvents.map((event) => (
                        <div key={event.id} className={styles.eventCard}>
                            <h3>{event.title}</h3>
                            <p>{event.author}</p>
                            <p>{event.description}</p>
                        </div>
                    ))
                ) : (
                    <p>No events scheduled for this day.</p>
                )}
            </div>
        </div>
    );
}

export default Calendar;
