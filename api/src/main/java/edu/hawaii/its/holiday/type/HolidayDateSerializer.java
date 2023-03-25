package edu.hawaii.its.holiday.type;

import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;

import edu.hawaii.its.holiday.util.Dates;

public class HolidayDateSerializer extends StdSerializer<LocalDate> {

    private static final long serialVersionUID = 159L;
    private DateTimeFormatter format = DateTimeFormatter.ofPattern(Dates.DATE_FORMAT);

    public HolidayDateSerializer() {
        this(null);
    }

    public HolidayDateSerializer(Class<LocalDate> t) {
        super(t);
    }

    @Override
    public void serialize(LocalDate date, JsonGenerator gen, SerializerProvider arg2)
            throws IOException, JsonProcessingException {
        gen.writeString(date.format(format)); // Do we need a null check?
    }
}