'use strict'

const getElementByAreaLabel = (elementType, ariaLabel) => {
    return cy.get(`${elementType}[aria-label="${ariaLabel}"]`)
}

const getElementById = (elementType, identifier) => {
    return cy.get(`${elementType}[id="${identifier}"]`)
}

const getElementByName = (elementType, name) => {
    return cy.get(`${elementType}[name="${name}"]`)
}

const getElementByParentClassName = (parentClass, elementType) => {
    return cy.get(`${parentClass}`).find(`${elementType}`)
}

const getElementByXpath = (xpath) => {
    return cy.xpath(`${xpath}`)
}

const getElementByCustomSelector = (elementType, selector, selectorValue) => {
    return cy.get(`${elementType}[${selector}="${selectorValue}"]`)
}

export const anchors = {
    getById: (id) => getElementById('a', id),
    getByName: (name) => getElementByName('a', name),
    getByXpath: (xpath) => getElementByXpath(xpath)
}

export const buttons = {
    getById: (id) => getElementById('button', id),
    getByMattToolTip:(toolTipText) => getElementByCustomSelector('button', 'mattooltip', toolTipText),
    getByName: (name) => getElementByName('button', name),
    getByParentClass: (parentClass) => getElementByParentClassName(parentClass, 'button'),
    getByXpath: (xpath) =>  getElementByXpath(xpath),
}

export const inputs = {
    getByAriaLabel: (aria_label) => getElementByAreaLabel('input', aria_label),
    getById: (id) => getElementById('input', id),
    getByName: (name) => getElementByName('input', name),
    getByPlaceholderText: (placeholder) => getElementByCustomSelector('input', 'placeholder', `${placeholder}`),
    getByValue: (value) => getElementByCustomSelector('input', 'value', `${value}`),
    getByXpath: (xpath) => getElementByXpath(xpath)
}

export const spans = {
    getById: (id) => getElementById('span', id)
}

export const textarea = {
    getById: (id) => getElementById('textarea', id),
    getByName: (name) => getElementByName('textarea', name),
    getByXpath: (xpath) => getElementByXpath(xpath)
}
