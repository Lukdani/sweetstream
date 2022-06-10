import { useMemo } from "react";

const GetStartedReceipt = ({ request }) => {
  const { leadName, leadEmail, leadPhone, leadEmailPref, leadPhonePref } =
    request;
  const contactBy = useMemo(() => {
    let contactBySetentence;
    if (leadEmailPref && leadPhonePref) {
      contactBySetentence = (
        <>
          We will contact you by email on <strong>{leadEmail}</strong> or phone
          on <strong>{leadPhone}</strong>.
        </>
      );
    } else if (leadEmailPref) {
      contactBySetentence = (
        <>
          We will contact you by email on <strong>{leadEmail}</strong>.
        </>
      );
    } else if (leadPhonePref) {
      contactBySetentence = (
        <>
          We will contact you by phone on <strong>{leadPhone}</strong>.
        </>
      );
    }
    return contactBySetentence;
  }, [leadEmail, leadEmailPref, leadPhone, leadPhonePref]);

  return (
    <p>
      Hi, <strong>{leadName}</strong>. We have received your message.
      <br />
      {contactBy}
      <br />
      <br />
      Thank you for reaching out to us!
    </p>
  );
};

export default GetStartedReceipt;
