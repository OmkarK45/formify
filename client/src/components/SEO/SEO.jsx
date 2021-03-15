import { Helmet } from "react-helmet-async"

export default function SEO({
  title,
  description = "With Formify, you can create, manage and view responses to your forms. Get submission alerts straight into your inbox. No credit card required.",
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description}></meta>
      <meta
        name="keywords"
        content="Formify, static form, form backend, form submit, submit form, online form service, "
      />
      <meta name="robots" content="index, follow" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English"></meta>
    </Helmet>
  )
}
