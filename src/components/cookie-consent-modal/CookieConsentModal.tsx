import { Button, Dialog, DialogTitle, DialogContentText, DialogActions, DialogContent } from '@mui/material';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { cookieActions } from '../../store/cookie-slice';

const CookieConsentModal = () => {
	const [isDisplayed, setIsDisplayed] = useState(true);
	const dispatch = useDispatch();
	const accept = () => dispatch(cookieActions.agree());
	const cancel = () => setIsDisplayed(false);

	return <div>
		{isDisplayed && createPortal(
			<Dialog onClose={cancel} open={true}>
				<DialogTitle>Cookie consent</DialogTitle>
				<DialogContent>
					<DialogContentText>
						react is cool, but this box...
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button variant="outlined" color="error" onClick={cancel}>Cancel</Button>
					<Button variant="outlined" color="success" onClick={accept}>Accept</Button>
				</DialogActions>
			</Dialog>
			, document.getElementById('modal')!)}
	</div>
}

export default CookieConsentModal;