import beautify, { CoreBeautifyOptions as BeautifyOptions } from 'js-beautify';
import prettier, { Options as PrettierOptions } from 'prettier';

type FormattingOptions = BeautifyOptions & PrettierOptions;

function format(unformattedJsString: string, options: FormattingOptions = {}) {
  const formattedCodeStringStep1 = beautify.js(
    unformattedJsString,
    {
      indent_size: 2,
      space_in_empty_paren: true,
      end_with_newline: true,
      space_after_anon_function: true,
      space_after_named_function: true,
      ...options
    }
  );

  const formattedCodeStringStep2 = prettier.format(
    formattedCodeStringStep1,
    {
      semi: true,
      parser: 'babel',
      ...options
    }
  );

  return formattedCodeStringStep2;
}

export { 
  format,
  FormattingOptions
}
