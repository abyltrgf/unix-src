; bundle page___edc864ef125c48b497b5c266b4fa7847_m
; files jquery.validate.min.js, jquery.validate.unobtrusive.min.js, extensionsThumbnails.js, IDEvalidator.js, IDEcreate.js

; jquery.validate.min.js
! jQuery Validation Plugin - v1.12.0 - 412014
  httpjqueryvalidation.org
  Copyright (c) 2014 J�rn Zaefferer; Licensed MIT 
!function (a) { a.extend(a.fn, { validate function (b) { if (!this.length) return void (b && b.debug && window.console && console.warn(Nothing selected, can't validate, returning nothing.)); var c = a.data(this[0], validator); return c  c  (this.attr(novalidate, novalidate), c = new a.validator(b, this[0]), a.data(this[0], validator, c), c.settings.onsubmit && (this.validateDelegate(submit, click, function (b) { c.settings.submitHandler && (c.submitButton = b.target), a(b.target).hasClass(cancel) && (c.cancelSubmit = !0), void 0 !== a(b.target).attr(formnovalidate) && (c.cancelSubmit = !0) }), this.submit(function (b) { function d() { var d; return c.settings.submitHandler  (c.submitButton && (d = a(input type='hidden').attr(name, c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), c.settings.submitHandler.call(c, c.currentForm, b), c.submitButton && d.remove(), !1)  !0 } return c.settings.debug && b.preventDefault(), c.cancelSubmit  (c.cancelSubmit = !1, d())  c.form()  c.pendingRequest  (c.formSubmitted = !0, !1)  d()  (c.focusInvalid(), !1) })), c) }, valid function () { var b, c; return a(this[0]).is(form)  b = this.validate().form()  (b = !0, c = a(this[0].form).validate(), this.each(function () { b = c.element(this) && b })), b }, removeAttrs function (b) { var c = {}, d = this; return a.each(b.split(s), function (a, b) { c[b] = d.attr(b), d.removeAttr(b) }), c }, rules function (b, c) { var d, e, f, g, h, i, j = this[0]; if (b) switch (d = a.data(j.form, validator).settings, e = d.rules, f = a.validator.staticRules(j), b) { case add a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages)); break; case remove return c  (i = {}, a.each(c.split(s), function (b, c) { i[c] = f[c], delete f[c], required === c && a(j).removeAttr(aria-required) }), i)  (delete e[j.name], f) } return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({ required h }, g), a(j).attr(aria-required, true)), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, { remote h })), g } }), a.extend(a.expr[], { blank function (b) { return !a.trim( + a(b).val()) }, filled function (b) { return !!a.trim( + a(b).val()) }, unchecked function (b) { return !a(b).prop(checked) } }), a.validator = function (b, c) { this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init() }, a.validator.format = function (b, c) { return 1 === arguments.length  function () { var c = a.makeArray(arguments); return c.unshift(b), a.validator.format.apply(this, c) }  (arguments.length  2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function (a, c) { b = b.replace(new RegExp({ + a + }, g), function () { return c }) }), b) }, a.extend(a.validator, { defaults { messages {}, groups {}, rules {}, errorClass error, validClass valid, errorElement label, focusInvalid !0, errorContainer a([]), errorLabelContainer a([]), onsubmit !0, ignore hidden, ignoreTitle !1, onfocusin function (a) { this.lastActive = a, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(a)).hide()) }, onfocusout function (a) { this.checkable(a)  !(a.name in this.submitted) && this.optional(a)  this.element(a) }, onkeyup function (a, b) { (9 !== b.which   !== this.elementValue(a)) && (a.name in this.submitted  a === this.lastElement) && this.element(a) }, onclick function (a) { a.name in this.submitted  this.element(a)  a.parentNode.name in this.submitted && this.element(a.parentNode) }, highlight function (b, c, d) { radio === b.type  this.findByName(b.name).addClass(c).removeClass(d)  a(b).addClass(c).removeClass(d) }, unhighlight function (b, c, d) { radio === b.type  this.findByName(b.name).removeClass(c).addClass(d)  a(b).removeClass(c).addClass(d) } }, setDefaults function (b) { a.extend(a.validator.defaults, b) }, messages { required This field is required., remote Please fix this field., email Please enter a valid email address., url Please enter a valid URL., date Please enter a valid date., dateISO Please enter a valid date (ISO)., number Please enter a valid number., digits Please enter only digits., creditcard Please enter a valid credit card number., equalTo Please enter the same value again., maxlength a.validator.format(Please enter no more than {0} characters.), minlength a.validator.format(Please enter at least {0} characters.), rangelength a.validator.format(Please enter a value between {0} and {1} characters long.), range a.validator.format(Please enter a value between {0} and {1}.), max a.validator.format(Please enter a value less than or equal to {0}.), min a.validator.format(Please enter a value greater than or equal to {0}.) }, autoCreateRanges !1, prototype { init function () { function b(b) { var c = a.data(this[0].form, validator), d = on + b.type.replace(^validate, ), e = c.settings; e[d] && !this.is(e.ignore) && e[d].call(c, this[0], b) } this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer  a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset(); var c, d = this.groups = {}; a.each(this.settings.groups, function (b, c) { string == typeof c && (c = c.split(s)), a.each(c, function (a, c) { d[c] = b }) }), c = this.settings.rules, a.each(c, function (b, d) { c[b] = a.validator.normalizeRule(d) }), a(this.currentForm).validateDelegate(text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] , focusin focusout keyup, b).validateDelegate([type='radio'], [type='checkbox'], select, option, click, b), this.settings.invalidHandler && a(this.currentForm).bind(invalid-form.validate, this.settings.invalidHandler), a(this.currentForm).find([required], [data-rule-required], .required).attr(aria-required, true) }, form function () { return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid()  a(this.currentForm).triggerHandler(invalid-form, [this]), this.showErrors(), this.valid() }, checkForm function () { this.prepareForm(); for (var a = 0, b = this.currentElements = this.elements() ; b[a]; a++) this.check(b[a]); return this.valid() }, element function (b) { var c = this.clean(b), d = this.validationTargetFor(c), e = !0; return this.lastElement = d, void 0 === d  delete this.invalid[c.name]  (this.prepareElement(d), this.currentElements = a(d), e = this.check(d) !== !1, e  delete this.invalid[d.name]  this.invalid[d.name] = !0), a(b).attr(aria-invalid, !e), this.numberOfInvalids()  (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e }, showErrors function (b) { if (b) { a.extend(this.errorMap, b), this.errorList = []; for (var c in b) this.errorList.push({ message b[c], element this.findByName(c)[0] }); this.successList = a.grep(this.successList, function (a) { return !(a.name in b) }) } this.settings.showErrors  this.settings.showErrors.call(this, this.errorMap, this.errorList)  this.defaultShowErrors() }, resetForm function () { a.fn.resetForm && a(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData(previousValue).removeAttr(aria-invalid) }, numberOfInvalids function () { return this.objectLength(this.invalid) }, objectLength function (a) { var b, c = 0; for (b in a) c++; return c }, hideErrors function () { this.addWrapper(this.toHide).hide() }, valid function () { return 0 === this.size() }, size function () { return this.errorList.length }, focusInvalid function () { if (this.settings.focusInvalid) try { a(this.findLastActive()  this.errorList.length && this.errorList[0].element  []).filter(visible).focus().trigger(focusin) } catch (b) { } }, findLastActive function () { var b = this.lastActive; return b && 1 === a.grep(this.errorList, function (a) { return a.element.name === b.name }).length && b }, elements function () { var b = this, c = {}; return a(this.currentForm).find(input, select, textarea).not(submit, reset, image, [disabled]).not(this.settings.ignore).filter(function () { return !this.name && b.settings.debug && window.console && console.error(%o has no name assigned, this), this.name in c  !b.objectLength(a(this).rules())  !1  (c[this.name] = !0, !0) }) }, clean function (b) { return a(b)[0] }, errors function () { var b = this.settings.errorClass.split( ).join(.); return a(this.settings.errorElement + . + b, this.errorContext) }, reset function () { this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]), this.currentElements = a([]) }, prepareForm function () { this.reset(), this.toHide = this.errors().add(this.containers) }, prepareElement function (a) { this.reset(), this.toHide = this.errorsFor(a) }, elementValue function (b) { var c, d = a(b), e = d.attr(type); return radio === e  checkbox === e  a(input[name=' + d.attr(name) + ']checked).val()  (c = d.val(), string == typeof c  c.replace(rg, )  c) }, check function (b) { b = this.validationTargetFor(this.clean(b)); var c, d, e, f = a(b).rules(), g = a.map(f, function (a, b) { return b }).length, h = !1, i = this.elementValue(b); for (d in f) { e = { method d, parameters f[d] }; try { if (c = a.validator.methods[d].call(this, i, b, e.parameters), dependency-mismatch === c && 1 === g) { h = !0; continue } if (h = !1, pending === c) return void (this.toHide = this.toHide.not(this.errorsFor(b))); if (!c) return this.formatAndAdd(b, e), !1 } catch (j) { throw this.settings.debug && window.console && console.log(Exception occurred when checking element  + b.id + , check the ' + e.method + ' method., j), j } } if (!h) return this.objectLength(f) && this.successList.push(b), !0 }, customDataMessage function (b, c) { return a(b).data(msg + c[0].toUpperCase() + c.substring(1).toLowerCase())  a(b).data(msg) }, customMessage function (a, b) { var c = this.settings.messages[a]; return c && (c.constructor === String  c  c[b]) }, findDefined function () { for (var a = 0; a  arguments.length; a++) if (void 0 !== arguments[a]) return arguments[a]; return void 0 }, defaultMessage function (b, c) { return this.findDefined(this.customMessage(b.name, c), this.customDataMessage(b, c), !this.settings.ignoreTitle && b.title  void 0, a.validator.messages[c], strongWarning No message defined for  + b.name + strong) }, formatAndAdd function (b, c) { var d = this.defaultMessage(b, c.method), e = ${(d+)}g; function == typeof d  d = d.call(this, c.parameters, b)  e.test(d) && (d = a.validator.format(d.replace(e, {$1}), c.parameters)), this.errorList.push({ message d, element b, method c.method }), this.errorMap[b.name] = d, this.submitted[b.name] = d }, addWrapper function (a) { return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a }, defaultShowErrors function () { var a, b, c; for (a = 0; this.errorList[a]; a++) c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message); if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]); if (this.settings.unhighlight) for (a = 0, b = this.validElements() ; b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass); this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show() }, validElements function () { return this.currentElements.not(this.invalidElements()) }, invalidElements function () { return a(this.errorList).map(function () { return this.element }) }, showLabel function (b, c) { var d = this.errorsFor(b); d.length  (d.removeClass(this.settings.validClass).addClass(this.settings.errorClass), d.html(c))  (d = a( + this.settings.errorElement + ).attr(for, this.idOrName(b)).addClass(this.settings.errorClass).html(c  ), this.settings.wrapper && (d = d.hide().show().wrap( + this.settings.wrapper + ).parent()), this.labelContainer.append(d).length  (this.settings.errorPlacement  this.settings.errorPlacement(d, a(b))  d.insertAfter(b))), !c && this.settings.success && (d.text(), string == typeof this.settings.success  d.addClass(this.settings.success)  this.settings.success(d, b)), this.toShow = this.toShow.add(d) }, errorsFor function (b) { var c = this.idOrName(b); return this.errors().filter(function () { return a(this).attr(for) === c }) }, idOrName function (a) { return this.groups[a.name]  (this.checkable(a)  a.name  a.id  a.name) }, validationTargetFor function (a) { return this.checkable(a) && (a = this.findByName(a.name).not(this.settings.ignore)[0]), a }, checkable function (a) { return radiocheckboxi.test(a.type) }, findByName function (b) { return a(this.currentForm).find([name=' + b + ']) }, getLength function (b, c) { switch (c.nodeName.toLowerCase()) { case select return a(optionselected, c).length; case input if (this.checkable(c)) return this.findByName(c.name).filter(checked).length } return b.length }, depend function (a, b) { return this.dependTypes[typeof a]  this.dependTypes[typeof a](a, b)  !0 }, dependTypes { boolean function (a) { return a }, string function (b, c) { return !!a(b, c.form).length }, function function (a, b) { return a(b) } }, optional function (b) { var c = this.elementValue(b); return !a.validator.methods.required.call(this, c, b) && dependency-mismatch }, startRequest function (a) { this.pending[a.name]  (this.pendingRequest++, this.pending[a.name] = !0) }, stopRequest function (b, c) { this.pendingRequest--, this.pendingRequest  0 && (this.pendingRequest = 0), delete this.pending[b.name], c && 0 === this.pendingRequest && this.formSubmitted && this.form()  (a(this.currentForm).submit(), this.formSubmitted = !1)  !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler(invalid-form, [this]), this.formSubmitted = !1) }, previousValue function (b) { return a.data(b, previousValue)  a.data(b, previousValue, { old null, valid !0, message this.defaultMessage(b, remote) }) } }, classRuleSettings { required { required !0 }, email { email !0 }, url { url !0 }, date { date !0 }, dateISO { dateISO !0 }, number { number !0 }, digits { digits !0 }, creditcard { creditcard !0 } }, addClassRules function (b, c) { b.constructor === String  this.classRuleSettings[b] = c  a.extend(this.classRuleSettings, b) }, classRules function (b) { var c = {}, d = a(b).attr(class); return d && a.each(d.split( ), function () { this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this]) }), c }, attributeRules function (b) { var c, d, e = {}, f = a(b), g = b.getAttribute(type); for (c in a.validator.methods) required === c  (d = b.getAttribute(c),  === d && (d = !0), d = !!d)  d = f.attr(c), minmax.test(c) && (null === g  numberrangetext.test(g)) && (d = Number(d)), d  0 === d  e[c] = d  g === c && range !== g && (e[c] = !0); return e.maxlength && -12147483647524288.test(e.maxlength) && delete e.maxlength, e }, dataRules function (b) { var c, d, e = {}, f = a(b); for (c in a.validator.methods) d = f.data(rule + c[0].toUpperCase() + c.substring(1).toLowerCase()), void 0 !== d && (e[c] = d); return e }, staticRules function (b) { var c = {}, d = a.data(b.form, validator); return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name])  {}), c }, normalizeRules function (b, c) { return a.each(b, function (d, e) { if (e === !1) return void delete b[d]; if (e.param  e.depends) { var f = !0; switch (typeof e.depends) { case string f = !!a(e.depends, c.form).length; break; case function f = e.depends.call(c, c) } f  b[d] = void 0 !== e.param  e.param  !0  delete b[d] } }), a.each(b, function (d, e) { b[d] = a.isFunction(e)  e(c)  e }), a.each([minlength, maxlength], function () { b[this] && (b[this] = Number(b[this])) }), a.each([rangelength, range], function () { var c; b[this] && (a.isArray(b[this])  b[this] = [Number(b[this][0]), Number(b[this][1])]  string == typeof b[this] && (c = b[this].split([s,]+), b[this] = [Number(c[0]), Number(c[1])])) }), a.validator.autoCreateRanges && (b.min && b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), b.minlength && b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b }, normalizeRule function (b) { if (string == typeof b) { var c = {}; a.each(b.split(s), function () { c[this] = !0 }), b = c } return b }, addMethod function (b, c, d) { a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d  d  a.validator.messages[b], c.length  3 && a.validator.addClassRules(b, a.validator.normalizeRule(b)) }, methods { required function (b, c, d) { if (!this.depend(d, c)) return dependency-mismatch; if (select === c.nodeName.toLowerCase()) { var e = a(c).val(); return e && e.length  0 } return this.checkable(c)  this.getLength(b, c)  0  a.trim(b).length  0 }, email function (a, b) { return this.optional(b)  ^[a-zA-Z0-9.!#$%&'+=^_`{}~-]+@[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])(.[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9]))$.test(a) }, url function (a, b) { return this.optional(b)  ^(httpssftp)(((([a-z]d-._~[u00A0-uD7FFuF900-uFDCFuFDF0-uFFEF])(%[da-f]{2})[!$&'()+,;=])@)(((d[1-9]d1dd2[0-4]d25[0-5]).(d[1-9]d1dd2[0-4]d25[0-5]).(d[1-9]d1dd2[0-4]d25[0-5]).(d[1-9]d1dd2[0-4]d25[0-5]))((([a-z]d[u00A0-uD7FFuF900-uFDCFuFDF0-uFFEF])(([a-z]d[u00A0-uD7FFuF900-uFDCFuFDF0-uFFEF])([a-z]d-._~[u00A0-uD7FFuF900-uFDCFuFDF0-uFFEF])([a-z]d[u00A0-uD7FFuF900-uFDCFuFDF0-uFFEF]))).)+(([a-z][u00A0-uD7FFuF900-uFDCFuFDF0-uFFEF])(([a-z][u00A0-uD7FFuF900-uFDCFuFDF0-uFFEF])([a-z]d-._~[u00A0-uD7FFuF900-uFDCFuFDF0-uFFEF])([a-z][u00A0-uD7FFuF900-uFDCFuFDF0-uFFEF]))).)(d))(((([a-z]d-._~[u00A0-uD7FFuF900-uFDCFuFDF0-uFFEF])(%[da-f]{2})[!$&'()+,;=]@)+((([a-z]d-._~[u00A0-uD7FFuF900-uFDCFuFDF0-uFFEF])(%[da-f]{2})[!$&'()+,;=]@))))(((([a-z]d-._~[u00A0-uD7FFuF900-uFDCFuFDF0-uFFEF])(%[da-f]{2})[!$&'()+,;=]@)[uE000-uF8FF]))(#((([a-z]d-._~[u00A0-uD7FFuF900-uFDCFuFDF0-uFFEF])(%[da-f]{2})[!$&'()+,;=]@)))$i.test(a) }, date function (a, b) { return this.optional(b)  !InvalidNaN.test(new Date(a).toString()) }, dateISO function (a, b) { return this.optional(b)  ^d{4}[-]d{1,2}[-]d{1,2}$.test(a) }, number function (a, b) { return this.optional(b)  ^-(d+d{1,3}(,d{3})+)(.d+)$.test(a) }, digits function (a, b) { return this.optional(b)  ^d+$.test(a) }, creditcard function (a, b) { if (this.optional(b)) return dependency-mismatch; if ([^0-9 -]+.test(a)) return !1; var c, d, e = 0, f = 0, g = !1; if (a = a.replace(Dg, ), a.length  13  a.length  19) return !1; for (c = a.length - 1; c = 0; c--) d = a.charAt(c), f = parseInt(d, 10), g && (f = 2)  9 && (f -= 9), e += f, g = !g; return e % 10 === 0 }, minlength function (b, c, d) { var e = a.isArray(b)  b.length  this.getLength(a.trim(b), c); return this.optional(c)  e = d }, maxlength function (b, c, d) { var e = a.isArray(b)  b.length  this.getLength(a.trim(b), c); return this.optional(c)  d = e }, rangelength function (b, c, d) { var e = a.isArray(b)  b.length  this.getLength(a.trim(b), c); return this.optional(c)  e = d[0] && e = d[1] }, min function (a, b, c) { return this.optional(b)  a = c }, max function (a, b, c) { return this.optional(b)  c = a }, range function (a, b, c) { return this.optional(b)  a = c[0] && a = c[1] }, equalTo function (b, c, d) { var e = a(d); return this.settings.onfocusout && e.unbind(.validate-equalTo).bind(blur.validate-equalTo, function () { a(c).valid() }), b === e.val() }, remote function (b, c, d) { if (this.optional(c)) return dependency-mismatch; var e, f, g = this.previousValue(c); return this.settings.messages[c.name]  (this.settings.messages[c.name] = {}), g.originalMessage = this.settings.messages[c.name].remote, this.settings.messages[c.name].remote = g.message, d = string == typeof d && { url d }  d, g.old === b  g.valid  (g.old = b, e = this, this.startRequest(c), f = {}, f[c.name] = b, a.ajax(a.extend(!0, { url d, mode abort, port validate + c.name, dataType json, data f, context e.currentForm, success function (d) { var f, h, i, j = d === !0  true === d; e.settings.messages[c.name].remote = g.originalMessage, j  (i = e.formSubmitted, e.prepareElement(c), e.formSubmitted = i, e.successList.push(c), delete e.invalid[c.name], e.showErrors())  (f = {}, h = d  e.defaultMessage(c, remote), f[c.name] = g.message = a.isFunction(h)  h(b)  h, e.invalid[c.name] = !0, e.showErrors(f)), g.valid = j, e.stopRequest(c, j) } }, d)), pending) } } }), a.format = function () { throw $.format has been deprecated. Please use $.validator.format instead. } }(jQuery), function (a) { var b, c = {}; a.ajaxPrefilter  a.ajaxPrefilter(function (a, b, d) { var e = a.port; abort === a.mode && (c[e] && c[e].abort(), c[e] = d) })  (b = a.ajax, a.ajax = function (d) { var e = (mode in d  d  a.ajaxSettings).mode, f = (port in d  d  a.ajaxSettings).port; return abort === e  (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f])  b.apply(this, arguments) }) }(jQuery), function (a) { a.extend(a.fn, { validateDelegate function (b, c, d) { return this.bind(c, function (c) { var e = a(c.target); return e.is(b)  d.apply(e, arguments)  void 0 }) } }) }(jQuery);

; jquery.validate.unobtrusive.min.js

 Unobtrusive validation support library for jQuery and jQuery Validate
 Copyright (C) Microsoft Corporation. All rights reserved.

(function (a) { var d = a.validator, b, e = unobtrusiveValidation; function c(a, b, c) { a.rules[b] = c; if (a.message) a.messages[b] = a.message } function j(a) { return a.replace(^s+s+$g, ).split(s,sg) } function f(a) { return a.replace(([!#$%&'()+,.;=@[]^`{}~])g, $1) } function h(a) { return a.substr(0, a.lastIndexOf(.) + 1) } function g(a, b) { if (a.indexOf(.) === 0) a = a.replace(., b); return a } function m(c, e) { var b = a(this).find([data-valmsg-for=' + f(e[0].name) + ']), d = b.attr(data-valmsg-replace), g = d  a.parseJSON(d) !== false  null; b.removeClass(field-validation-valid).addClass(field-validation-error); c.data(unobtrusiveContainer, b); if (g) { b.empty(); c.removeClass(input-validation-error).appendTo(b) } else c.hide() } function l(e, d) { var c = a(this).find([data-valmsg-summary=true]), b = c.find(ul); if (b && b.length && d.errorList.length) { b.empty(); c.addClass(validation-summary-errors).removeClass(validation-summary-valid); a.each(d.errorList, function () { a(li ).html(this.message).appendTo(b) }) } } function k(d) { var b = d.data(unobtrusiveContainer), c = b.attr(data-valmsg-replace), e = c  a.parseJSON(c)  null; if (b) { b.addClass(field-validation-valid).removeClass(field-validation-error); d.removeData(unobtrusiveContainer); e && b.empty() } } function n() { var b = a(this); b.data(validator).resetForm(); b.find(.validation-summary-errors).addClass(validation-summary-valid).removeClass(validation-summary-errors); b.find(.field-validation-error).addClass(field-validation-valid).removeClass(field-validation-error).removeData(unobtrusiveContainer).find().removeData(unobtrusiveContainer) } function i(c) { var b = a(c), d = b.data(e), f = a.proxy(n, c); if (!d) { d = { options { errorClass input-validation-error, errorElement span, errorPlacement a.proxy(m, c), invalidHandler a.proxy(l, c), messages {}, rules {}, success a.proxy(k, c) }, attachValidation function () { b.unbind(reset. + e, f).bind(reset. + e, f).validate(this.options) }, validate function () { b.validate(); return b.valid() } }; b.data(e, d) } return d } d.unobtrusive = { adapters [], parseElement function (b, h) { var d = a(b), f = d.parents(form)[0], c, e, g; if (!f) return; c = i(f); c.options.rules[b.name] = e = {}; c.options.messages[b.name] = g = {}; a.each(this.adapters, function () { var c = data-val- + this.name, i = d.attr(c), h = {}; if (i !== undefined) { c += -; a.each(this.params, function () { h[this] = d.attr(c + this) }); this.adapt({ element b, form f, message i, params h, rules e, messages g }) } }); a.extend(e, { __dummy__ true }); !h && c.attachValidation() }, parse function (b) { var c = a(b).parents(form).andSelf().add(a(b).find(form)).filter(form); a(b).find(input[data-val=true]).each(function () { d.unobtrusive.parseElement(this, true) }); c.each(function () { var a = i(this); a && a.attachValidation() }) } }; b = d.unobtrusive.adapters; b.add = function (c, a, b) { if (!b) { b = a; a = [] } this.push({ name c, params a, adapt b }); return this }; b.addBool = function (a, b) { return this.add(a, function (d) { c(d, b  a, true) }) }; b.addMinMax = function (e, g, f, a, d, b) { return this.add(e, [d  min, b  max], function (b) { var e = b.params.min, d = b.params.max; if (e && d) c(b, a, [e, d]); else if (e) c(b, g, e); else d && c(b, f, d) }) }; b.addSingleVal = function (a, b, d) { return this.add(a, [b  val], function (e) { c(e, d  a, e.params[b]) }) }; d.addMethod(__dummy__, function () { return true }); d.addMethod(regex, function (b, c, d) { var a; if (this.optional(c)) return true; a = (new RegExp(d)).exec(b); return a && a.index === 0 && a[0].length === b.length }); d.addMethod(nonalphamin, function (c, d, b) { var a; if (b) { a = c.match(Wg); a = a && a.length = b } return a }); b.addSingleVal(accept, exts).addSingleVal(regex, pattern); b.addBool(creditcard).addBool(date).addBool(digits).addBool(email).addBool(number).addBool(url); b.addMinMax(length, minlength, maxlength, rangelength).addMinMax(range, min, max, range); b.add(equalto, [other], function (b) { var i = h(b.element.name), j = b.params.other, d = g(j, i), e = a(b.form).find(input[name=' + f(d) + '])[0]; c(b, equalTo, e) }); b.add(required, function (a) { (a.element.tagName.toUpperCase() !== INPUT  a.element.type.toUpperCase() !== CHECKBOX) && c(a, required, true) }); b.add(remote, [url, type, additionalfields], function (b) { var d = { url b.params.url, type b.params.type  GET, data {} }, e = h(b.element.name); a.each(j(b.params.additionalfields  b.element.name), function (i, h) { var c = g(h, e); d.data[c] = function () { return a(b.form).find(input[name=' + f(c) + ']).val() } }); c(b, remote, d) }); b.add(password, [min, nonalphamin, regex], function (a) { a.params.min && c(a, minlength, a.params.min); a.params.nonalphamin && c(a, nonalphamin, a.params.nonalphamin); a.params.regex && c(a, regex, a.params.regex) }); a(function () { d.unobtrusive.parse(document) }) })(jQuery);

; extensionsThumbnails.js
$(function(){function i(n){var t=n.el.is(img)n.eln.el.find(img);return t.length===1tn.el.find(img.original-image)}function s(n,t){var r=i(t),u;u=n.data!=null&&n.data[0].imageUrl!=nulln.data[0].imageUrln.Url,!r.attr(src)&&r.hasClass(lazy)r.attr(data-original,u)r.attr(src,u),t.el.removeAttr(data-retry-url),t.el.trigger(thumbnailLoaded)}function h(n){var i=+new Date-n.start;Roblox.ThumbnailMetrics&&Roblox.ThumbnailMetrics.logFinalThumbnailTime(i),t([ThumbnailGenTime,2D,Success,i]),t([ThumbnailGenRetries,2D,Success,n.retryCount])}function c(n){var i=+new Date-n.start;Roblox.ThumbnailMetrics&&Roblox.ThumbnailMetrics.logThumbnailTimeout(),t([ThumbnailGenRetries,2D,Gave Up,n.retryCount]),t([ThumbnailGenTime,2D,Gave Up,i])}function l(n,t){n.Finaln.data!=null&&n.data[0].state!=null&&n.data[0].state===Completed(t.realRegeneration&&h(t),s(n,t))(t.realRegeneration=!0,t.retryCount++,t.retryCountfsetTimeout(function(){t.retryFunction(t)},u)c(t))}function r(n){var t=n.el.data(retry-url);t&&$.ajax({urlt,dataTypejson,cache!1,crossDomain!0,xhrFields{withCredentials!0},successfunction(t){l(t,n)}})}var n=$(#image-retry-data),u=nn.data(image-retry-timer)1500,f=nn.data(image-retry-max-times)10,e=nn.data(ga-logging-percent)0,o=window.GoogleAnalyticsEvents&&GoogleAnalyticsEvents.FireEventfunction(){},t=function(n){Math.random()=e100&&o(n)};$.fn.loadRobloxThumbnails=function(){return this.each(function(){var n={retryCount0,realRegeneration!1,start+new Date,el$(this),retryFunctionr},t=i(n);t.one(load,function(){var t=+new Date-n.start;Roblox.ThumbnailMetrics&&Roblox.ThumbnailMetrics.logFinalThumbnailTime(t,2dThumbnailOnLoad)});setTimeout(function(){r(n)},0)})}});

; IDEvalidator.js
var Roblox=Roblox{};Roblox.IDE=Roblox.IDE{},Roblox.IDE.validator=function(){function r(n,t,i){n.toggleClass(field-validation-valid,!t),n.toggleClass(field-validation-error,!!t),t(n.text(t),i&&Roblox.StyleguideConversions.convertMvcErrorToStyleGuide())n.html().removeClass(tool-tip)}function u(r){var f,e,u,o;if(r.attr(type)===file){if(r[0].files.length=0)returnYou must select a file.;if(r.attr(accept))for(f=r.attr(accept).split()[0],e=new RegExp(r.attr(accept).replace(,.)),u=0;ur[0].files.length;u++)if(!e.test(r[0].files[u].type))returnFile type must be +f}else{if(r.data(n)&&!r.val().trim())return r.data(n);if(r.data(t)&&(o=new RegExp(r.data(t)),!o.test(r.val())))return r.data(i)}return}var n=val-required,t=val-regex-pattern,i=val-regex;return function(n,t,i){function f(f){var e=!0;return t.forEach(function(n){var t=u(n.input);t&&(e=!1),(f!t)&&r(n.errorSpan,t,i)}),en.button.removeAttr(disabled)n.button.attr(disabled,disabled),n.button.toggleClass(n.enabledClass,e).toggleClass(n.disabledClass,!e).prop(disabled,!e),e}function e(){t.forEach(function(n){if(n.input.attr(type)===file)n.input.change(function(){f(!0)});else n.input.on(blur keyup,function(){f(!0)})}),f(!1)}return{inite,validateInputsf}}}();

; IDEcreate.js
var Roblox=Roblox{};Roblox.IDE=Roblox.IDE{},Roblox.IDE.Create=Roblox.IDE.Createfunction(){function i(n){var t={overlayClose!1,opacity80,overlayCss{backgroundColor#000},escClose!1};typeof n!=undefined&&n!==&&$.modal.close(.+n),$(#ProcessingView).modal(t)}function r(){window.location.href=$(.boxed-body).data(return-url)}function u(){window.close()}function f(){var e=$(input#Name),f=$(#finishButton),o=Roblox.IDE.validator({buttonf,enabledClasst,disabledClassn},[{inpute,errorSpan$(#nameRow span)}],!1);$(#cancelButton).click(r),$(#closeButton).click(u),f.click(function(){return $(this).hasClass(n)!1($(this).removeClass(t).addClass(n),i(),$(form).submit(),!1)}),o.init()}var t=btn-primary,n=btn-disabled-primary;return $(f),{}}();

;Bundle detector
Roblox && Roblox.BundleDetector && Roblox.BundleDetector.bundleDetected('page');