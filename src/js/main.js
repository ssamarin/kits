
import _ from './lib/lib';
import './lib/lib';

_('button').on('click', function() {
    _('div').eq(1).toggleClass('active');
});

_('div').click(function() {
    console.log(_(this).index());
});

console.log(_('div').eq(2).find('.some'));