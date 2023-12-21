package SemyaDebilov.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import SemyaDebilov.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Топливо
 */
@Entity(name = "IISSemyaDebilovТопливо")
@Table(schema = "public", name = "Топливо")
public class Toplivo {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ТипТоплива")
    private String типтоплива;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "SpravochnikCen")
    @Convert("SpravochnikCen")
    @Column(name = "СправочникЦен", length = 16, unique = true, nullable = false)
    private UUID _spravochnikcenid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "SpravochnikCen", insertable = false, updatable = false)
    private SpravochnikCen spravochnikcen;


    public Toplivo() {
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


}