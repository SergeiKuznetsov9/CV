import { StickerLine } from "../../components/stickerLine/stickerLine";
import { ReactComponent as LocationIcon } from "../../assets/icons/location.svg";
import { ReactComponent as MailIcon } from "../../assets/icons/mail.svg";
import { ReactComponent as TelephoneIcon } from "../../assets/icons/telephone.svg";
import { ReactComponent as TelegrammIcon } from "../../assets/icons/telegram.svg";
import { ReactComponent as ViberIcon } from "../../assets/icons/viber.svg";
import { ReactComponent as WhatsappIcon } from "../../assets/icons/whatsapp.svg";
import cls from "./contacts.module.scss";
import { useTranslation } from "react-i18next";

export const Contacts = () => {
  const { t } = useTranslation();
  return (
    <section className={cls.Contacts}>
      <StickerLine text={t("контакты")} className={cls.sticker} />
      <div className={cls.item}>
        <LocationIcon className={cls.icon} />
        <span className={cls.location}>
          {t("Республика Беларусь, г.Гомель")}
        </span>
      </div>
      <div className={cls.item}>
        <TelephoneIcon className={cls.icon} />
        <span>+375 (44) 7224795</span>
        <TelegrammIcon className={cls.icon} />
        <WhatsappIcon className={cls.icon} />
        <ViberIcon className={cls.icon} />
      </div>
      <div className={cls.hint}>
        <span>{t("Предпочтительный способ связи -")}</span>
        <span className={cls.hintIcon}>
          Telegram <TelegrammIcon className={cls.iconForHint} />
        </span>
      </div>
      <div className={cls.item}>
        <MailIcon className={cls.icon} />
        <span>Kuznetsoff9@yandex.ru</span>
      </div>
    </section>
  );
};
