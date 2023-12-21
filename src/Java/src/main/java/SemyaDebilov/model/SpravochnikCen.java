package SemyaDebilov.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import SemyaDebilov.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: СправочникЦен
 */
@Entity(name = "IISSemyaDebilovСправочникЦен")
@Table(schema = "public", name = "СправочникЦен")
public class SpravochnikCen {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ТипТоплива")
    private String типтоплива;

    @Column(name = "Цена")
    private Double цена;


    public SpravochnikCen() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getТипТоплива() {
      return типтоплива;
    }

    public void setТипТоплива(String типтоплива) {
      this.типтоплива = типтоплива;
    }

    public Double getЦена() {
      return цена;
    }

    public void setЦена(Double цена) {
      this.цена = цена;
    }


}