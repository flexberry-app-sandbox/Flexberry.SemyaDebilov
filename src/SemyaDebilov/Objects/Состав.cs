﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.SemyaDebilov
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Состав.
    /// </summary>
    // *** Start programmer edit section *** (Состав CustomAttributes)

    // *** End programmer edit section *** (Состав CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СоставE", new string[] {
            "Пистолет as \'Пистолет\'",
            "Пистолет.Номер as \'Номер\'",
            "Пистолет.Топливо.ТипТоплива as \'Тип топлива\'",
            "Пистолет.Топливо.СправочникЦен.Цена as \'Цена\'"}, Hidden=new string[] {
            "Пистолет.Номер"})]
    [MasterViewDefineAttribute("СоставE", "Пистолет", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Номер")]
    public class Состав : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.SemyaDebilov.Пистолет fПистолет;
        
        private IIS.SemyaDebilov.Колонка fКолонка;
        
        // *** Start programmer edit section *** (Состав CustomMembers)

        // *** End programmer edit section *** (Состав CustomMembers)

        
        /// <summary>
        /// Состав.
        /// </summary>
        // *** Start programmer edit section *** (Состав.Пистолет CustomAttributes)

        // *** End programmer edit section *** (Состав.Пистолет CustomAttributes)
        [PropertyStorage(new string[] {
                "Пистолет"})]
        [NotNull()]
        public virtual IIS.SemyaDebilov.Пистолет Пистолет
        {
            get
            {
                // *** Start programmer edit section *** (Состав.Пистолет Get start)

                // *** End programmer edit section *** (Состав.Пистолет Get start)
                IIS.SemyaDebilov.Пистолет result = this.fПистолет;
                // *** Start programmer edit section *** (Состав.Пистолет Get end)

                // *** End programmer edit section *** (Состав.Пистолет Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Состав.Пистолет Set start)

                // *** End programmer edit section *** (Состав.Пистолет Set start)
                this.fПистолет = value;
                // *** Start programmer edit section *** (Состав.Пистолет Set end)

                // *** End programmer edit section *** (Состав.Пистолет Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.SemyaDebilov.Колонка.
        /// </summary>
        // *** Start programmer edit section *** (Состав.Колонка CustomAttributes)

        // *** End programmer edit section *** (Состав.Колонка CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Колонка"})]
        public virtual IIS.SemyaDebilov.Колонка Колонка
        {
            get
            {
                // *** Start programmer edit section *** (Состав.Колонка Get start)

                // *** End programmer edit section *** (Состав.Колонка Get start)
                IIS.SemyaDebilov.Колонка result = this.fКолонка;
                // *** Start programmer edit section *** (Состав.Колонка Get end)

                // *** End programmer edit section *** (Состав.Колонка Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Состав.Колонка Set start)

                // *** End programmer edit section *** (Состав.Колонка Set start)
                this.fКолонка = value;
                // *** Start programmer edit section *** (Состав.Колонка Set end)

                // *** End programmer edit section *** (Состав.Колонка Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СоставE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СоставE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СоставE", typeof(IIS.SemyaDebilov.Состав));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of Состав.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfСостав CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfСостав CustomAttributes)
    public class DetailArrayOfСостав : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.SemyaDebilov.DetailArrayOfСостав members)

        // *** End programmer edit section *** (IIS.SemyaDebilov.DetailArrayOfСостав members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type Состав by index.
        /// </summary>
        /// <summary>
        /// Adds object with type Состав.
        /// </summary>
        public DetailArrayOfСостав(IIS.SemyaDebilov.Колонка fКолонка) : 
                base(typeof(Состав), ((ICSSoft.STORMNET.DataObject)(fКолонка)))
        {
        }
        
        public IIS.SemyaDebilov.Состав this[int index]
        {
            get
            {
                return ((IIS.SemyaDebilov.Состав)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.SemyaDebilov.Состав dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
