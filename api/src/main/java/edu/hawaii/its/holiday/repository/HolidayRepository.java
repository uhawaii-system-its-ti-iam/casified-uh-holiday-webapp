package edu.hawaii.its.holiday.repository;

import edu.hawaii.its.holiday.type.Holiday;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface HolidayRepository extends JpaRepository<Holiday, Integer> {

    @Override
    Optional<Holiday> findById(Integer id);

    List<Holiday> findAllByOrderByObservedDateDesc();

    List<Holiday> findAllByOfficialDateBetween(LocalDate start, LocalDate end);

    @Query("select distinct h.description from Holiday h order by h.description")
    List<String> findAllDistinctDescription();

    Page<Holiday> findAllByOrderByObservedDateAsc(Pageable var1);
}
